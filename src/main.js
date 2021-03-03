import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import XLSX from "xlsx";
import moment from "moment";

import app from "./App.vue";

//组件注册
import ImportExcel from "./components/importExcel.vue";
import ExportExcel from "./components/exportExcel.vue";
import AdminOperate from "./components/adminOperate.vue";
import DateSelect from "./components/dateSelect.vue";
import OperateData from "./components/operateData.vue";

Vue.config.productionTip = false;
Vue.use(XLSX);
Vue.prototype.$moment = moment;
Vue.use(ElementUI);
Vue.component(ImportExcel.name, ImportExcel); //导入表格
Vue.component(ExportExcel.name, ExportExcel); //导出表格
Vue.component(AdminOperate.name, AdminOperate); //人员管理
Vue.component(DateSelect.name, DateSelect); //时间选择
Vue.component(OperateData.name, OperateData); //运营数据

//日期格式化
Vue.filter("dateFormat", val => {
  return moment(val).format("MM-DD");
});

new Vue({
  render: h => h(app),
}).$mount("#app");
