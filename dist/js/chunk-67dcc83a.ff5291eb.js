(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67dcc83a"],{"1a08":function(t,e,a){},"5d6e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.$router.push({name:"addSite",query:{id:0}})}}},[t._v("增加")]),a("el-table",{staticClass:"site-table",staticStyle:{width:"100%"},attrs:{data:t.siteData,height:"calc(100% - 100px)"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"name",width:"100",label:"名称"}}),a("el-table-column",{attrs:{prop:"length",label:"长度"}}),a("el-table-column",{attrs:{prop:"id",width:"50",label:"ID"}}),a("el-table-column",{attrs:{label:"类型",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.type)+"\n      ")]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.$router.push({name:"addSite",query:{id:e.row.id}})}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.delClick(e.row.id)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"site-pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},i=[],l=a("880a"),s={data:function(){return{siteData:[],page:1,currentPage1:10,allPage:0}},computed:{total:function(){return this.currentPage1*this.allPage-1}},created:function(){this._getSite()},methods:{_getSite:function(){var t=this;Object(l["a"])("lists",{page:this.page}).then(function(e){e&&t.getSite(e)})},getSite:function(t){this.siteData=t.list,t.allPage&&(this.allPage=t.allPage)},_delSite:function(t){var e=this;Object(l["a"])("del",{id:t}).then(function(t){t&&e.delSite()})},delSite:function(t){this.$message({type:"success",message:"删除成功"}),this._getSite()},delClick:function(t){this._delSite(t)},handleCurrentChange:function(t){this.page=t,this._getSite()}}},c=s,r=(a("b4e3"),a("2877")),u=Object(r["a"])(c,n,i,!1,null,"3c54cb70",null);e["default"]=u.exports},b4e3:function(t,e,a){"use strict";var n=a("1a08"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-67dcc83a.ff5291eb.js.map