(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48f1784f"],{"62ca":function(e,t,a){"use strict";var l=a("d68d"),s=a.n(l);s.a},"7a1e":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{staticStyle:{padding:"0 0 40px 20px"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{name:"gameList"}}},[e._v("比赛")]),a("el-breadcrumb-item",[e._v("比赛配置")])],1),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{staticClass:"inline-block",attrs:{label:"地区名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{staticClass:"inline-block",attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择开始时间"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),a("el-form-item",{staticClass:"inline-block",attrs:{label:"结束时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择结束时间"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),a("el-form-item",{staticClass:"inline-block",attrs:{label:"赛事名称"}},[a("el-input",{model:{value:e.form.track,callback:function(t){e.$set(e.form,"track",t)},expression:"form.track"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio",{attrs:{label:"0"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("停用")]),a("el-radio",{attrs:{label:"1"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("启用")]),a("el-radio",{attrs:{label:"2"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("结束")])],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._v("香港赛事")]),a("el-radio",{attrs:{label:"2"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._v("国际赛事")])],1),a("el-form-item",{attrs:{label:"赛事类别"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("越洋转播赛事")]),a("el-radio",{attrs:{label:"2"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("世界短途挑战赛")]),a("el-radio",{attrs:{label:"3"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("三冠大赛")]),a("el-radio",{attrs:{label:"4"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("香港速度系列")]),a("el-radio",{attrs:{label:"5"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("四岁马系列")]),a("el-radio",{attrs:{label:"6"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("越洋转播赛事日")]),a("el-radio",{attrs:{label:"0"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}},[e._v("其他")])],1),a("el-form-item",{staticClass:"inline-block",attrs:{label:"长度"}},[a("el-input",{model:{value:e.form.length,callback:function(t){e.$set(e.form,"length",t)},expression:"form.length"}})],1),a("el-form-item",{staticClass:"inline-block",attrs:{label:"图标"}},[a("el-input",{model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),a("el-form-item",{attrs:{label:"上传封面"}},[a("el-upload",{attrs:{action:e.ini.horse_url,"list-type":"picture-card",limit:1,name:"img","file-list":e.fileList,"on-remove":e.handleRemove,"on-preview":e.handlePictureCardPreview,"on-success":e.handleSuccess}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.submitText))]),a("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")])],1)],1)],1)},s=[],i=(a("7f7f"),a("880a")),o=a("0729"),r=a("bc3a"),n=a.n(r),c={data:function(){return{ini:{horse_url:"".concat(o["a"],"/upload.php?c=Upload&a=index&type=4"),del_url:"".concat(o["a"],"/upload.php?c=Upload&a=del&res=")},form:{name:"",begin_time:"",end_time:"",icon:"",track:"",status:"1",type:"1",length:"",desc:""},fileList:[],dialogVisible:!1,dialogImageUrl:"",value1:"",value2:"",submitText:"立即创建",id:this.$route.query.id}},created:function(){this.$route.query.id>0&&(this.submitText="立即修改",this._getaddGame())},methods:{_getaddGame:function(){var e=this;this.form.id=this.id,Object(i["g"])("info",this.form).then(function(t){t&&e.getaddGame(t)})},getaddGame:function(e){this.form=e,this.value1=new Date(1e3*e.begin_time),this.value2=new Date(1e3*e.end_time),this.fileList.push({name:"icon.png",url:this.form.icon})},_postaddGame:function(){var e=this;Object(i["g"])("set",this.form).then(function(t){t&&e.postaddGame(t)})},postaddGame:function(e){this.$message({type:"success",message:e}),this.$router.push({name:"gameList"})},onSubmit:function(){""!==this.value1&&null!=this.value1?(this.form.begin_time=this.value1.getTime()/1e3,""!==this.value2&&null!=this.value2?(this.form.end_time=this.value2.getTime()/1e3,this._postaddGame()):this.$message("请选择结束时间")):this.$message("请选择开始时间")},handleRemove:function(e,t){var a=this;n.a.post("".concat(this.ini.del_url).concat(e.response.data.img_url)).then(function(t){delete a.imagesObj[e.name]}).catch(function(e){console.log(e)})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleSuccess:function(e,t,a){this.form.icon=e.data.img_url}}},m=c,u=(a("62ca"),a("2877")),d=Object(u["a"])(m,l,s,!1,null,"1beda7d0",null);t["default"]=d.exports},d68d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-48f1784f.fef9d947.js.map