(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d8f1cbc"],{"01b8":function(e,t,l){"use strict";var i=l("6419"),o=l.n(i);o.a},6419:function(e,t,l){},e08c:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{"text-align":"left"}},[l("el-breadcrumb",{staticStyle:{padding:"0 0 40px 20px"}},[l("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),l("el-breadcrumb-item",{attrs:{to:{path:"/horse"}}},[e._v("马匹")]),l("el-breadcrumb-item",[e._v("马匹配置")])],1),l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{staticClass:"inline-block",attrs:{label:"马匹名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"年龄"}},[l("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"体重"}},[l("el-input",{model:{value:e.form.h_weight,callback:function(t){e.$set(e.form,"h_weight",t)},expression:"form.h_weight"}})],1),l("el-form-item",{attrs:{label:"性别"}},[l("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("公")]),l("el-radio",{attrs:{label:"2"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("母")]),l("el-radio",{attrs:{label:"3"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("阉")]),l("el-radio",{attrs:{label:"4"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("隐睾")])],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"体重变化"}},[l("el-input",{model:{value:e.form.w_change,callback:function(t){e.$set(e.form,"w_change",t)},expression:"form.w_change"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"能力(1-12)"}},[l("el-input",{model:{value:e.form.ability,callback:function(t){e.$set(e.form,"ability",t)},expression:"form.ability"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"状态(1-12)"}},[l("el-input",{model:{value:e.form.condition,callback:function(t){e.$set(e.form,"condition",t)},expression:"form.condition"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"评分"}},[l("el-input",{model:{value:e.form.score,callback:function(t){e.$set(e.form,"score",t)},expression:"form.score"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"独赢比例"}},[l("el-input",{model:{value:e.form.win,callback:function(t){e.$set(e.form,"win",t)},expression:"form.win"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"位置比例"}},[l("el-input",{model:{value:e.form.place,callback:function(t){e.$set(e.form,"place",t)},expression:"form.place"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"第一"}},[l("el-input",{model:{value:e.form.first,callback:function(t){e.$set(e.form,"first",t)},expression:"form.first"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"第二"}},[l("el-input",{model:{value:e.form.second,callback:function(t){e.$set(e.form,"second",t)},expression:"form.second"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"第三"}},[l("el-input",{model:{value:e.form.third,callback:function(t){e.$set(e.form,"third",t)},expression:"form.third"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"跑的场数"}},[l("el-input",{model:{value:e.form.total,callback:function(t){e.$set(e.form,"total",t)},expression:"form.total"}})],1),l("el-form-item",{staticClass:"inline-block",attrs:{label:"归属"}},[l("el-input",{model:{value:e.form.attach,callback:function(t){e.$set(e.form,"attach",t)},expression:"form.attach"}})],1),l("el-form-item",{attrs:{label:"评语"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}})],1),l("el-form-item",{attrs:{label:"上传封面"}},[l("el-upload",{attrs:{action:e.ini.horse_url,"list-type":"picture-card",limit:1,name:"img","file-list":e.fileList,"on-remove":e.handleRemove,"on-preview":e.handlePictureCardPreview,"on-success":e.handleSuccess}},[l("i",{staticClass:"el-icon-plus"})]),l("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.submitText))]),l("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")])],1)],1)],1)},o=[],a=(l("7f7f"),l("880a")),s=l("0729"),r=l("bc3a"),n=l.n(r),c={data:function(){return{ini:{horse_url:"".concat(s["a"],"/upload.php?c=Upload&a=index&type=4"),del_url:"".concat(s["a"],"/upload.php?c=Upload&a=del&res=")},form:{name:"",age:"",sex:"",h_weight:"",w_change:"",ability:"",condition:"",score:"",win:"",place:"",first:"",second:"",third:"",total:"",attach:"",icon:"",comment:""},fileList:[],dialogVisible:!1,dialogImageUrl:"",submitText:"立即创建",id:this.$route.query.id}},created:function(){this.$route.query.id>0&&(this.submitText="立即修改",this._getHorse())},methods:{_getHorse:function(){var e=this;this.form.id=this.id,Object(a["c"])("info",this.form).then(function(t){t&&e.getHorse(t)})},getHorse:function(e){this.form=e,this.fileList.push({name:"icon.png",url:this.form.icon})},_postHorse:function(){var e=this;Object(a["c"])("set",this.form).then(function(t){t&&e.postHorse(t)})},postHorse:function(e){this.$message({type:"success",message:"添加成功"}),this.$router.push({name:"horse"})},onSubmit:function(){for(var e in this.form)""===this.form[e]&&(this.form[e]=0);this._postHorse()},handleRemove:function(e,t){var l=this;n.a.post("".concat(this.ini.del_url).concat(e.response.data.img_url)).then(function(t){delete l.imagesObj[e.name]}).catch(function(e){console.log(e)})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleSuccess:function(e,t,l){this.form.icon=e.data.img_url}}},m=c,f=(l("01b8"),l("2877")),u=Object(f["a"])(m,i,o,!1,null,"557e17a4",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-3d8f1cbc.b50a00a4.js.map