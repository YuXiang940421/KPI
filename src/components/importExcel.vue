<template>
  <div class="import-container">
    <div class="upload">
      <el-upload
        class="upload-demo"
        ref="upload"
        accept=".xls,.xlsx"
        action="#"
        :on-change="upload"
        :show-file-list="true"
        :auto-upload="false"
        :multiple="false"
      >
        <el-button slot="trigger" size="large" id="btn" type="primary">导入excel</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx";

export default {
  name: "excel-import",
  //数据
  data() {
    return {
      tabData: [],
    };
  },
  //方法
  methods: {
    sortChange(column) {
      if (column.prop == null || column.order == null) {
        this.queryData.prop = "";
        this.queryData.order = "";
      } else {
        this.queryData.prop = column.prop;
        this.queryData.order = column.order;
      }
    },

    upload(file, fileList) {
      if (fileList.length > 1) fileList.shift();
      console.log(file, "file");
      console.log(fileList, "fileList");
      let files = { 0: file.raw }; // 取到File
      this.readExcel(files);
    },
    readExcel(files) {
      // 表格导入
      if (files.length <= 0) {
        // 如果没有文件名
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }

      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary",
          });
          const wsname = workbook.SheetNames[0]; // 取第一张表
          let ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // 生成json表格内容
          console.log("ws", ws);

          ws.forEach(value => {
            if (!isNaN(Number(value.统计日期))) {
              value.统计日期 = this.$moment("1900-01-01")
                .add(value.统计日期 - 2, "days")
                .format("YYYY-MM-DD");
            } else {
              value.统计日期 = this.$moment(value.统计日期).format("YYYY-MM-DD");
            }

            return value.统计日期;
          });
          this.tabData = ws;
          if (!this.tabData[0].商品ID) throw "表格格式错误!";
          this.$message({
            message: "解析成功",
            type: "success",
          });

          //传递数据
          this.$emit("change-data", this.tabData);
          // 重写数据
          this.$refs.upload.value = "";
        } catch (e) {
          if (e == "表格格式错误!") {
            this.$message.error(e);
          } else {
            this.$message.error("解析失败");
          }
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
  },
};
</script>

<style lang="less" scoped>
.upload {
  text-align: center;
}
</style>
