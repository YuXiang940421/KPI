<template>
  <el-container>
    <!-- header -->
    <el-header height="85px">
      <el-row type="flex" justify="space-between" style="height:85px" align="middle">
        <!-- 导入文件 -->
        <el-col :span="6">
          <excel-import @change-data="changeData"></excel-import>
        </el-col>
        <!-- 时间选择 -->
        <el-col :span="12">
          <date-select
            :totalData="dataArr"
            :excelDays="excelDays"
            @date-select="dateSelect"
            style="margin-top:20px"
          ></date-select>
        </el-col>
        <!-- 人员管理 -->
        <el-col :span="6">
          <el-row type="flex" justify="space-around" align="middle" style="color:#fff">
            <admin-operate
              :productArr="productArr"
              v-for="(item, index) in adminConfig"
              :config="adminConfig[index]"
              :key="index"
              @admin-add="adminAdd"
              @admin-del="adminDel"
              @admin-bind="adminBind"
            ></admin-operate>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <!-- main -->
    <el-main>
      <export-excel :showDate="showDate" :tableData="tableData" id="export-excel"></export-excel>
      <el-row
        type="flex"
        justify="space-around"
        style="margin-top:10px"
        v-for="(item, index) in tableData"
        :key="index"
      >
        <el-col :span="12">
          <operate-data :tableData="item" :showDate="showDate"></operate-data>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dataArr: [], //总表数据
      date: [], //日期选择器覆盖的日期集合数组
      adminConfig: [
        { staffs: [], called: "运营" },
        { staffs: [], called: "设计" },
        { staffs: [], called: "产品" },
      ],
    };
  },
  computed: {
    //id去重 并与 最后一次标题 匹配
    productArr: {
      get() {
        //id去重得到总表中的idArr
        let set = new Set();
        this.dataArr.forEach(val => {
          set.add(val.商品ID);
        });

        //匹配标题
        let productArr = [];
        [...set].forEach(value => {
          let allId = this.dataArr.filter(val => val.商品ID == value); //获取该id所有日期的数据
          productArr.push({
            id: value,
            title: allId[allId.length - 1].商品名称, //获取最后一次标题
          });
        });
        return productArr;
      },
    },
    //获取被绑定的id
    idArr: {
      get() {
        let set = new Set();
        this.adminConfig.forEach(totalVal => {
          totalVal.staffs.forEach(staffVal => {
            staffVal.ids.forEach(idVal => {
              set.add(idVal);
            });
          });
        });
        return [...set];
      },
    },
    //获取被绑定的id 所有日期的数据
    idData: {
      get() {
        let idDataArr = [];
        //遍历所有被绑定的id数组
        this.idArr.forEach(idVal => {
          //筛选出所有该id的数据
          let findArr = this.dataArr.filter(totalVal => totalVal.商品ID == idVal);
          let arr = []; //创建一个新数组,为当前id储存所有日期的数据
          findArr.forEach(findVal => {
            //判断是否是字符串,是的话转成数字
            if (typeof findVal.支付金额 == "string") {
              findVal.支付金额 = Number(findVal.支付金额.split(",").join(""));
            }
            if (typeof findVal.支付件数 == "string") {
              findVal.支付件数 = Number(findVal.支付件数.split(",").join(""));
            }
            //存入当前日期的数据
            arr.push({
              date: findVal.统计日期,
              money: findVal.支付金额.toFixed(2),
              count: findVal.支付件数.toFixed(0),
            });
          });
          //存入当前id所有日期数据
          idDataArr.push({ id: idVal, data: arr });
        });
        //所有被绑定id的所有日期数据
        console.log("idData", idDataArr);
        return idDataArr;
      },
    },
    //获取每个id在选择日期内的数据合计
    showData: {
      get() {
        let arr = [];
        //遍历被绑定的id 所有日期数据
        this.idData.forEach(totalVal => {
          let sumMoney = 0;
          let sumCount = 0;
          //遍历当前id的所有日期数据
          totalVal.data.forEach(idData => {
            //如果日期选择中包含此日期则统计
            if (this.date.includes(idData.date)) {
              sumMoney += Number(idData.money);
              sumCount += Number(idData.count);
            }
          });
          //存入当前id在选择日期内的数据合计
          arr.push({ id: totalVal.id, money: sumMoney.toFixed(2), count: sumCount.toFixed(0) });
        });
        return arr;
      },
    },
    //获取三个表格的数据
    tableData: {
      get() {
        //[{called:"运营",data:[{operate:2131,money:1231231,count:1231},{operate:2131,money:1231231,count:1231}]}]
        let totalArr = []; //新建数组承接数据
        //遍历人员管理
        this.adminConfig.forEach(configVal => {
          let staffArr = []; //新建数组承接当前职位所有人员的数据
          //遍历当前职位的所有人员
          configVal.staffs.forEach(adminVal => {
            let sumMoney = 0;
            let sumCount = 0;
            //遍历当前人员的绑定id
            adminVal.ids.forEach(idVal => {
              //遍历所有被绑定id在选择日期内的数据合计
              this.showData.forEach(showVal => {
                //如果id符合则统计
                if (idVal == showVal.id) {
                  sumMoney += Number(showVal.money);
                  sumCount += Number(showVal.count);
                }
              });
            });
            //存入当前人员的数据
            staffArr.push({
              operate: adminVal.operate,
              money: sumMoney.toFixed(2),
              count: sumCount.toFixed(0),
              average: this.trueDays ? (sumMoney / this.trueDays).toFixed(2) : 0,
            });
          });
          //存入当前职位的数据
          totalArr.push({ called: configVal.called, data: staffArr });
        });
        console.log("tableData", totalArr);
        console.log("this.trueDays", this.trueDays);

        return totalArr;
      },
    },
    //获取总表中覆盖的日期
    excelDays: {
      get() {
        let set = new Set();
        this.dataArr.forEach(value => set.add(value.统计日期));
        return [...set].sort();
      },
    },
    //获取选择时间内,具有数据的日期数量
    trueDays: {
      get() {
        let days = 0;
        //遍历日期选择器中覆盖的日期
        this.date.forEach(selectDay => {
          //如果总表数据中包含该日期则+1
          if (this.excelDays.includes(selectDay)) {
            days++;
          }
        });
        return days;
      },
    },
    //获取表格显示时间
    showDate: {
      get() {
        if (!this.date[0]) return `请选择时间`;
        if (this.date[0] === this.date[this.date.length - 1]) {
          return this.date[0];
        } else {
          return `${this.date[0]} 至 ${this.date[this.date.length - 1]}`;
        }
      },
    },
  },
  watch: {
    //总表数据
    dataArr(val) {
      console.log("dataArr", val);
    },
    //日期选择
    date(val) {
      console.log("date", val);
    },
    //人员管理
    adminConfig: {
      handler(val) {
        console.log("adminConfig", val);
        localStorage.setItem("localConfig", JSON.stringify(val));
      },
      deep: true,
    },
  },
  methods: {
    //添加人员
    adminAdd(val, called) {
      try {
        let index = this.adminConfig.findIndex(val => val.called == called);
        this.adminConfig[index].staffs.push({ id: Date.now(), operate: val, ids: [] });
        this.$message.success("运营 " + val + " 添加成功");
      } catch (error) {
        this.$message.error("运营 " + val + " 添加失败");
      }
    },
    //删除人员
    adminDel(val, called) {
      try {
        let index = this.adminConfig.findIndex(val => val.called == called);
        this.adminConfig[index].staffs = this.adminConfig[index].staffs.filter(item => item.operate != val);
        this.$message.success(val + " 删除成功");
      } catch (error) {
        this.$message.error(val + " 删除失败");
      }
    },
    //绑定链接
    adminBind(operate, ids, called) {
      try {
        let i = this.adminConfig.findIndex(val => val.called == called);
        let index = this.adminConfig[i].staffs.findIndex(val => val.operate == operate);
        if (index == -1) {
          this.adminConfig[i].staffs.push({
            id: Date.now(),
            operate,
            ids,
          });
        } else {
          this.adminConfig[i].staffs[index].ids = ids;
        }
        this.$message.success("绑定成功!");
      } catch (error) {
        this.$message.error("绑定失败!");
      }
    },
    //导入表格接收总表数据
    changeData(val) {
      this.dataArr = val;
    },
    //接收覆盖日期的数组
    dateSelect(val) {
      this.date = val;
    },
  },
  mounted() {
    this.adminConfig = JSON.parse(localStorage.getItem("localConfig")) || [
      { staffs: [], called: "运营" },
      { staffs: [], called: "设计" },
      { staffs: [], called: "产品" },
    ];
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);
  background-image: radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);
  cursor: arrow;
  #export-excel {
    position: fixed;
    z-index: 9999;
    bottom: 30px;
    right: 30px;
  }
}
</style>
