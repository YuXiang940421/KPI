(function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],f=0,u=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([1,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},2:function(e,t){},2395:function(e,t,a){},2649:function(e,t,a){},3:function(e,t){},"3f4e":function(e,t,a){"use strict";a("ced8")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1"),a("b0c0"),a("4de4");var n=a("2b0e"),s=a("5c96"),o=a.n(s),i=(a("0fae"),a("1146")),r=a.n(i),l=a("c1df"),c=a.n(l),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{attrs:{height:"85px"}},[a("el-row",{staticStyle:{height:"85px"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{attrs:{span:6}},[a("excel-import",{on:{"change-data":e.changeData}})],1),a("el-col",{attrs:{span:12}},[a("date-select",{staticStyle:{"margin-top":"20px"},attrs:{totalData:e.dataArr,excelDays:e.excelDays},on:{"date-select":e.dateSelect}})],1),a("el-col",{attrs:{span:6}},[a("el-row",{staticStyle:{color:"#fff"},attrs:{type:"flex",justify:"space-around",align:"middle"}},e._l(e.adminConfig,(function(t,n){return a("admin-operate",{key:n,attrs:{productArr:e.productArr,config:e.adminConfig[n]},on:{"admin-add":e.adminAdd,"admin-del":e.adminDel,"admin-bind":e.adminBind}})})),1)],1)],1)],1),a("el-main",[a("export-excel",{attrs:{showDate:e.showDate,tableData:e.tableData,id:"export-excel"}}),e._l(e.tableData,(function(t,n){return a("el-row",{key:n,staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:12}},[a("operate-data",{attrs:{tableData:t,showDate:e.showDate}})],1)],1)}))],2)],1)},f=[],u=a("2909"),p=(a("6062"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("a9e3"),a("a15b"),a("1276"),a("ac1f"),a("b680"),a("caad"),a("2532"),a("99af"),a("c740"),{data:function(){return{dataArr:[],date:[],adminConfig:[{staffs:[],called:"运营"},{staffs:[],called:"设计"},{staffs:[],called:"产品"}]}},computed:{productArr:{get:function(){var e=this,t=new Set;this.dataArr.forEach((function(e){t.add(e.商品ID)}));var a=[];return Object(u["a"])(t).forEach((function(t){var n=e.dataArr.filter((function(e){return e.商品ID==t}));a.push({id:t,title:n[n.length-1].商品名称})})),a}},idArr:{get:function(){var e=new Set;return this.adminConfig.forEach((function(t){t.staffs.forEach((function(t){t.ids.forEach((function(t){e.add(t)}))}))})),Object(u["a"])(e)}},idData:{get:function(){var e=this,t=[];return this.idArr.forEach((function(a){var n=e.dataArr.filter((function(e){return e.商品ID==a})),s=[];n.forEach((function(e){"string"==typeof e.支付金额&&(e.支付金额=Number(e.支付金额.split(",").join(""))),"string"==typeof e.支付件数&&(e.支付件数=Number(e.支付件数.split(",").join(""))),s.push({date:e.统计日期,money:e.支付金额.toFixed(2),count:e.支付件数.toFixed(0)})})),t.push({id:a,data:s})})),console.log("idData",t),t}},showData:{get:function(){var e=this,t=[];return this.idData.forEach((function(a){var n=0,s=0;a.data.forEach((function(t){e.date.includes(t.date)&&(n+=Number(t.money),s+=Number(t.count))})),t.push({id:a.id,money:n.toFixed(2),count:s.toFixed(0)})})),t}},tableData:{get:function(){var e=this,t=[];return this.adminConfig.forEach((function(a){var n=[];a.staffs.forEach((function(t){var a=0,s=0;t.ids.forEach((function(t){e.showData.forEach((function(e){t==e.id&&(a+=Number(e.money),s+=Number(e.count))}))})),n.push({operate:t.operate,money:a.toFixed(2),count:s.toFixed(0),average:e.trueDays?(a/e.trueDays).toFixed(2):0})})),t.push({called:a.called,data:n})})),console.log("tableData",t),console.log("this.trueDays",this.trueDays),t}},excelDays:{get:function(){var e=new Set;return this.dataArr.forEach((function(t){return e.add(t.统计日期)})),Object(u["a"])(e).sort()}},trueDays:{get:function(){var e=this,t=0;return this.date.forEach((function(a){e.excelDays.includes(a)&&t++})),t}},showDate:{get:function(){return this.date[0]?this.date[0]===this.date[this.date.length-1]?this.date[0]:"".concat(this.date[0]," 至 ").concat(this.date[this.date.length-1]):"请选择时间"}}},watch:{dataArr:function(e){console.log("dataArr",e)},date:function(e){console.log("date",e)},adminConfig:{handler:function(e){console.log("adminConfig",e),localStorage.setItem("localConfig",JSON.stringify(e))},deep:!0}},methods:{adminAdd:function(e,t){try{var a=this.adminConfig.findIndex((function(e){return e.called==t}));this.adminConfig[a].staffs.push({id:Date.now(),operate:e,ids:[]}),this.$message.success("运营 "+e+" 添加成功")}catch(n){this.$message.error("运营 "+e+" 添加失败")}},adminDel:function(e,t){try{var a=this.adminConfig.findIndex((function(e){return e.called==t}));this.adminConfig[a].staffs=this.adminConfig[a].staffs.filter((function(t){return t.operate!=e})),this.$message.success(e+" 删除成功")}catch(n){this.$message.error(e+" 删除失败")}},adminBind:function(e,t,a){try{var n=this.adminConfig.findIndex((function(e){return e.called==a})),s=this.adminConfig[n].staffs.findIndex((function(t){return t.operate==e}));-1==s?this.adminConfig[n].staffs.push({id:Date.now(),operate:e,ids:t}):this.adminConfig[n].staffs[s].ids=t,this.$message.success("绑定成功!")}catch(o){this.$message.error("绑定失败!")}},changeData:function(e){this.dataArr=e},dateSelect:function(e){this.date=e}},mounted:function(){this.adminConfig=JSON.parse(localStorage.getItem("localConfig"))||[{staffs:[],called:"运营"},{staffs:[],called:"设计"},{staffs:[],called:"产品"}]}}),h=p,m=(a("7c55"),a("2877")),b=Object(m["a"])(h,d,f,!1,null,null,null),g=b.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"import-container"},[a("div",{staticClass:"upload"},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{accept:".xls,.xlsx",action:"#","on-change":e.upload,"show-file-list":!0,"auto-upload":!1,multiple:!1}},[a("el-button",{attrs:{slot:"trigger",size:"large",id:"btn",type:"primary"},slot:"trigger"},[e._v("导入excel")])],1)],1)])},v=[],y={name:"excel-import",data:function(){return{tabData:[]}},methods:{sortChange:function(e){null==e.prop||null==e.order?(this.queryData.prop="",this.queryData.order=""):(this.queryData.prop=e.prop,this.queryData.order=e.order)},upload:function(e,t){t.length>1&&t.shift(),console.log(e,"file"),console.log(t,"fileList");var a={0:e.raw};this.readExcel(a)},readExcel:function(e){var t=this;if(e.length<=0)return!1;if(!/\.(xls|xlsx)$/.test(e[0].name.toLowerCase()))return this.$Message.error("上传格式不正确，请上传xls或者xlsx格式"),!1;var a=new FileReader;a.onload=function(e){try{var a=e.target.result,n=r.a.read(a,{type:"binary"}),s=n.SheetNames[0],o=r.a.utils.sheet_to_json(n.Sheets[s]);if(console.log("ws",o),o.forEach((function(e){return isNaN(Number(e.统计日期))?e.统计日期=t.$moment(e.统计日期).format("YYYY-MM-DD"):e.统计日期=t.$moment("1900-01-01").add(e.统计日期-2,"days").format("YYYY-MM-DD"),e.统计日期})),t.tabData=o,!t.tabData[0].商品ID)throw"表格格式错误!";t.$message({message:"解析成功",type:"success"}),t.$emit("change-data",t.tabData),t.$refs.upload.value=""}catch(i){return"表格格式错误!"==i?t.$message.error(i):t.$message.error("解析失败"),!1}},a.readAsBinaryString(e[0])}}},x=y,w=(a("d81a"),Object(m["a"])(x,j,v,!1,null,"8af84910",null)),D=w.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"export-excel-bg"},[a("el-button",{attrs:{id:"btn"},on:{click:e.exportBtn}},[e._v("导出Excel")])],1)},O=[],S=a("ade3"),_=a("53ca"),C=(a("c19f"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("2b3d"),{name:"export-excel",props:["showDate","tableData"],methods:{workbook2blob:function(e){var t={bookType:"xlsx",bookSST:!1,type:"binary"},a=r.a.write(e,t);function n(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n!==e.length;++n)a[n]=255&e.charCodeAt(n);return t}var s=n(a),o=new Blob([s],{type:"application/octet-stream"});return o},openDownloadDialog:function(e,t){"object"===Object(_["a"])(e)&&e instanceof Blob&&(e=URL.createObjectURL(e));var a,n=document.createElement("a");n.href=e,n.download=t||"",window.MouseEvent?a=new MouseEvent("click"):(a=document.createEvent("MouseEvents"),a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),n.dispatchEvent(a)},exportBtn:function(){this.exportExcel()},exportExcel:function(){var e=this;if("请选择时间"===this.showDate)return this.$message.error("暂无数据!");var t=[];this.tableData.forEach((function(a){var n=[];a.data.forEach((function(t){var s;n.push((s={"日期":e.showDate},Object(S["a"])(s,a.called,t.operate),Object(S["a"])(s,"支付金额",t.money),Object(S["a"])(s,"支付件数",t.count),s))})),t.push(n)})),console.log("sheetData",t);var a=t[0],n=t[1],s=t[2],o=r.a.utils.json_to_sheet(a),i=r.a.utils.json_to_sheet(n),l=r.a.utils.json_to_sheet(s),c=r.a.utils.book_new();r.a.utils.book_append_sheet(c,o,"运营"),r.a.utils.book_append_sheet(c,i,"设计"),r.a.utils.book_append_sheet(c,l,"产品");var d=this.workbook2blob(c);this.openDownloadDialog(d,"".concat(this.showDate,"业绩统计.xlsx"))}}}),A=C,$=(a("ce5c"),Object(m["a"])(A,k,O,!1,null,"0d620278",null)),E=$.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dropdown",{on:{command:e.handleCommand}},[a("el-button",{attrs:{type:"primary",plain:""}},[e._v(" "+e._s(e.config.called)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"add"}},[e._v("添加人员")]),a("el-dropdown-item",{attrs:{command:"del"}},[e._v("删除人员")]),a("el-dropdown-item",{attrs:{command:"admin"}},[e._v("绑定链接")])],1)],1),a("el-dialog",{attrs:{title:"添加"+e.config.called,visible:e.isOpenAdd,width:"350px","modal-append-to-body":!1,"lock-scroll":!1},on:{"update:visible":function(t){e.isOpenAdd=t}}},[a("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.isAdd(t)}}},[a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-input",{ref:"input",attrs:{placeholder:"请输入"+e.config.called+"姓名"},model:{value:e.addOperate,callback:function(t){e.addOperate="string"===typeof t?t.trim():t},expression:"addOperate"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isOpenAdd=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.isAdd}},[e._v("确定添加")])],1)],1),a("el-dialog",{attrs:{title:"删除"+e.config.called,visible:e.isOpenDel,width:"350px","modal-append-to-body":!1,"lock-scroll":!1},on:{"update:visible":function(t){e.isOpenDel=t}}},[a("el-form",[a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-select",{attrs:{placeholder:"请选择运营",filterable:""},model:{value:e.delOperate,callback:function(t){e.delOperate=t},expression:"delOperate"}},e._l(e.config.staffs,(function(e){return a("el-option",{key:e.id,attrs:{label:e.operate,value:e.operate}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isOpenDel=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"danger"},on:{click:e.isDel}},[e._v("确定删除")])],1)],1),a("el-dialog",{attrs:{title:"绑定链接",visible:e.isOpenAdmin,width:"350px","lock-scroll":!1},on:{"update:visible":function(t){e.isOpenAdmin=t}}},[a("el-form",{attrs:{"label-width":"70px"}},[a("el-form-item",{attrs:{label:"运营"}},[a("el-select",{attrs:{placeholder:"请选择运营",filterable:""},on:{change:e.idDefault},model:{value:e.operateSelect,callback:function(t){e.operateSelect=t},expression:"operateSelect"}},e._l(e.config.staffs,(function(e){return a("el-option",{key:e.id,attrs:{label:e.operate,value:e.operate}})})),1)],1),e.operateSelect?a("el-form-item",{staticStyle:{"margin-top":"10px"},attrs:{label:"商品id"}},[a("el-select",{attrs:{placeholder:" 请输入商品id ",filterable:"",multiple:"","allow-create":!0},on:{"remove-tag":e.clearId},model:{value:e.idSelect,callback:function(t){e.idSelect=t},expression:"idSelect"}},e._l(e.productArr,(function(e){return a("el-option",{key:e.id,attrs:{label:e.id+"("+e.title.slice(0,5)+"...)",value:e.id}})})),1)],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isOpenAdmin=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.isAdmin}},[e._v("确认绑定")])],1)],1)],1)},T=[],M=(a("a434"),a("498a"),a("25f0"),{name:"admin-operate",props:["productArr","config"],data:function(){return{isOpenAdd:null,addOperate:null,isOpenDel:null,delOperate:null,isOpenAdmin:!1,operateSelect:null,idSelect:null,delId:null}},methods:{handleCommand:function(e){var t=this;if("add"==e&&(this.isOpenAdd=!0,this.$nextTick((function(){t.$refs.input.focus()}))),"del"==e&&(this.isOpenDel=!0),"admin"==e&&0===this.config.staffs.length)return this.$message.error("请先添加运营人员!");"admin"==e&&(this.isOpenAdmin=!0),"check"==e&&(this.isOpenCheck=!0)},isAdd:function(){var e=this;return this.addOperate?this.config.staffs.some((function(t){return t.operate==e.addOperate}))?this.$message.error("运营 ".concat(this.addOperate," 已存在")):(this.$emit("admin-add",this.addOperate,this.config.called),void(this.addOperate=null)):this.$message.error("内容不能为空")},isDel:function(){var e=this;this.$confirm("<h3>是否确定删除 ".concat(this.delOperate,"？</h3>---该操作会同时删除").concat(this.delOperate,"的<strong>所有链接绑定</strong>---"),"确认信息",{distinguishCancelAndClose:!0,dangerouslyUseHTMLString:!0,lockScroll:!1,confirmButtonText:"确定",cancelButtonText:"放弃修改",type:"warning"}).then((function(){e.$emit("admin-del",e.delOperate,e.config.called),e.delOperate=null}))},idDefault:function(){var e=this,t=this.config.staffs.findIndex((function(t){return t.operate==e.operateSelect}));this.idSelect=-1!=t?this.config.staffs[t].ids:null},clearId:function(e){var t=this;this.delId=e,this.$confirm("<h3>是否确定为 ".concat(this.operateSelect," 删除 ").concat(e," 链接？</h3>---继续点击【确认绑定】后生效---"),"删除链接确认",{distinguishCancelAndClose:!0,dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"放弃",type:"warning"}).catch((function(){t.idSelect.push(t.delId)}))},isAdmin:function(){var e=this;this.$confirm("<h3>".concat(this.operateSelect,"</h3>").concat(this.idSelect.join("<br>")),"确认绑定信息",{distinguishCancelAndClose:!0,dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"放弃修改",type:"success"}).then((function(){e.idSelect.forEach((function(t,a){e.idSelect.splice(a,1,t.toString().trim())})),e.idSelect=e.idSelect.filter((function(t,a){return e.idSelect.indexOf(t)==a})),e.$emit("admin-bind",e.operateSelect,e.idSelect,e.config.called),e.isOpenAdmin=!1,e.operateSelect=e.idSelect=null}))}},watch:{}}),I=M,N=Object(m["a"])(I,z,T,!1,null,"3c764c62",null),B=N.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions},model:{value:e.dateSelect,callback:function(t){e.dateSelect=t},expression:"dateSelect"}})],1)},F=[],L={name:"date-select",props:["totalData","excelDays"],data:function(){return{dateSelect:null,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},computed:{},watch:{dateSelect:function(e){for(var t=this,a=[],n=(new Date(e[1])-new Date(e[0]))/864e5,s=0;s<n+1;s++)a.push(this.$moment(e[0]).add(s,"days").format("YYYY-MM-DD"));this.$emit("date-select",a);var o=a.filter((function(e){return!t.excelDays.includes(e)}));o.length>0&&this.$notify({title:"提示",message:"<h3>以下日期数据缺失</h3>".concat(o.join("<br>")),dangerouslyUseHTMLString:!0,duration:0,type:"warning"})},excelDays:function(e){e.length>1&&(this.dateSelect=[e[0],e[e.length-1]]),1==e.length&&(this.dateSelect=[e[0],e[0]])}}},U=L,P=(a("79e9"),Object(m["a"])(U,Y,F,!1,null,"c8ef3e16",null)),q=P.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.data,"default-sort":{prop:"money",order:"ascending"},id:"day-table","element-loading-text":"加载中"}},[a("el-table-column",{attrs:{label:e.showDate}},[a("el-table-column",{attrs:{prop:"operate",label:e.tableData.called,sortable:""}}),a("el-table-column",{attrs:{prop:"money",label:"支付金额",sortable:""}}),a("el-table-column",{attrs:{prop:"count",label:"支付件数",sortable:""}}),a("el-table-column",{attrs:{prop:"average",label:"日均",sortable:""}})],1)],1)],1)},J=[],R={name:"operate-data",props:["tableData","showDate"],data:function(){return{loading:!1}},computed:{},watch:{tableData:function(){var e=this;clearTimeout(t),this.loading=!0;var t=setTimeout((function(){e.loading=!1}),500)}}},G=R,K=(a("3f4e"),Object(m["a"])(G,H,J,!1,null,"2b9af1b9",null)),Q=K.exports;n["default"].config.productionTip=!1,n["default"].use(r.a),n["default"].prototype.$moment=c.a,n["default"].use(o.a),n["default"].component(D.name,D),n["default"].component(E.name,E),n["default"].component(B.name,B),n["default"].component(q.name,q),n["default"].component(Q.name,Q),n["default"].filter("dateFormat",(function(e){return c()(e).format("MM-DD")})),new n["default"]({render:function(e){return e(g)}}).$mount("#app")},"5cfa":function(e,t,a){},"79e9":function(e,t,a){"use strict";a("a497")},"7c55":function(e,t,a){"use strict";a("2395")},a497:function(e,t,a){},ce5c:function(e,t,a){"use strict";a("5cfa")},ced8:function(e,t,a){},d81a:function(e,t,a){"use strict";a("2649")}});
//# sourceMappingURL=app.22ff9f9f.js.map