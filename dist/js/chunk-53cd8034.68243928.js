(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cd8034"],{"63cd":function(t,e,a){},cde9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.$router.push({name:"addgameList",query:{id:0}})}}},[t._v("增加")]),a("el-table",{staticClass:"game-list-table",staticStyle:{width:"100%"},attrs:{data:t.gameListData,height:"calc(100% - 120px)"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"id",width:"50",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",width:"100",label:"名称"}}),a("el-table-column",{attrs:{prop:"type",width:"80",label:"类型"}}),a("el-table-column",{attrs:{width:"100",label:"图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.icon,alt:"",width:"50px",height:"50px"}})]}}])}),a("el-table-column",{attrs:{width:"200",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("capitalize")(e.row.begin_time))+"\n      ")]}}])}),a("el-table-column",{attrs:{width:"200",label:"结束时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("capitalize")(e.row.end_time))+"\n      ")]}}])}),a("el-table-column",{attrs:{prop:"desc",width:"80",label:"赛事级别"}}),a("el-table-column",{attrs:{prop:"track",label:"赛事名称"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.$router.push({name:"addgameList",query:{id:e.row.id}})}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.$router.push({name:"gameSession",query:{id:e.row.id}})}}},[t._v("配置场次")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.delClick(e.row.id)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"game-list-pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},l=[],i=a("880a"),s={components:{},data:function(){return{gameListData:[],page:1,currentPage1:10,allPage:0}},computed:{total:function(){return this.currentPage1*this.allPage-1}},created:function(){this._getgameList()},filters:{capitalize:function(t){var e;t+="",13===t.length?e=new Date(+t):t.length<13&&(e=new Date(1e3*t));var a=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",l=e.getDate()<10?"0"+e.getDate():e.getDate(),i=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();if(""!==t&&void 0!==t)return a+n+l+" "+i+":"+s}},methods:{_getgameList:function(){var t=this;Object(i["g"])("lists",{page:this.page}).then(function(e){e&&t.getgameList(e)})},getgameList:function(t){this.gameListData=t.list,t.allPage&&(this.allPage=t.allPage)},_delgameList:function(t){var e=this;Object(i["g"])("del",{id:t}).then(function(t){t&&e.delgameList(t)})},delgameList:function(t){this.$message({type:"success",message:"删除成功"}),this._getgameList()},delClick:function(t){this._delgameList(t)},handleCurrentChange:function(t){this.page=t,this._getgameList()}}},r=s,o=(a("f42b"),a("2877")),u=Object(o["a"])(r,n,l,!1,null,"2c4f82b7",null);e["default"]=u.exports},f42b:function(t,e,a){"use strict";var n=a("63cd"),l=a.n(n);l.a}}]);
//# sourceMappingURL=chunk-53cd8034.68243928.js.map