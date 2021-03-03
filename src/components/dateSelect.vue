<template>
  <!-- 时间选择器 -->
  <div class="block">
    <el-date-picker
      v-model="dateSelect"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "date-select",
  props: ["totalData", "excelDays"],
  data() {
    return {
      dateSelect: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  computed: {},
  watch: {
    //选择时间后自动转化为所有覆盖日期的数组,并传送给App.vue
    dateSelect(val) {
      let arr = [];
      let dateLength = (new Date(val[1]) - new Date(val[0])) / 86400000;
      for (let index = 0; index < dateLength + 1; index++) {
        arr.push(
          this.$moment(val[0])
            .add(index, "days")
            .format("YYYY-MM-DD")
        );
      }
      this.$emit("date-select", arr);
      let delDays = arr.filter(val => !this.excelDays.includes(val));
      if (delDays.length > 0) {
        this.$notify({
          title: "提示",
          message: `<h3>以下日期数据缺失</h3>${delDays.join("<br>")}`,
          dangerouslyUseHTMLString: true,
          duration: 0,
          type: "warning",
        });
      }
    },
    //通过总表数据的日期自动设置时间选择器
    excelDays(val) {
      if (val.length > 1) {
        this.dateSelect = [val[0], val[val.length - 1]];
      }
      if (val.length == 1) {
        this.dateSelect = [val[0], val[0]];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.block {
  text-align: center;
  margin-bottom: 20px;
}
</style>
