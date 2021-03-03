<template>
  <div>
    <!-- 数据显示表格 -->
    <el-table
      :data="tableData.data"
      style="width: 100%"
      :default-sort="{ prop: 'money', order: 'ascending' }"
      id="day-table"
      v-loading="loading"
      element-loading-text="加载中"
    >
      <el-table-column :label="showDate">
        <el-table-column prop="operate" :label="tableData.called" sortable> </el-table-column>
        <el-table-column prop="money" label="支付金额" sortable> </el-table-column>
        <el-table-column prop="count" label="支付件数" sortable> </el-table-column>
        <el-table-column prop="average" label="日均" sortable> </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "operate-data",
  props: ["tableData", "showDate"],
  data() {
    return {
      loading: false,
    };
  },
  computed: {},
  watch: {
    tableData() {
      clearTimeout(timer);
      this.loading = true;
      let timer = setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="less" scoped>
#day-table {
  border-radius: 8px;
  // &:hover {
  //   transform: translate(0, -1px);
  //   box-shadow: 0px 2px 5px rgba(0, 4, 20, 0.3);
  // }
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background: transparent;
}
</style>
