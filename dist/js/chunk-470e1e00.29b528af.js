(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-470e1e00"],{"02f4":function(e,t,n){var r=n("4588"),a=n("be13");e.exports=function(e){return function(t,n){var i,o,l=String(a(t)),u=r(n),c=l.length;return u<0||u>=c?e?"":void 0:(i=l.charCodeAt(u),i<55296||i>56319||u+1===c||(o=l.charCodeAt(u+1))<56320||o>57343?e?l.charAt(u):i:e?l.slice(u,u+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1e4e":function(e,t,n){"use strict";n("28a5");var r=["日","一","二","三","四","五","六"];function a(e,t){e+="";var n=0;13===e.length?n=new Date(+e):e.length<13&&(n=new Date(1e3*e));var a=n.getFullYear(),i=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,o=n.getDate()<10?"0"+n.getDate():n.getDate(),l=n.getHours()<10?"0"+n.getHours():n.getHours(),u=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();if(""!==e&&void 0!==e)switch(t){case"day":return a+"/"+i+"/"+o;case"week":return a+"/"+i+"/"+o+" 星期"+r[n.getDay()];case"time":return l+":"+u;case"slash":return a+"/"+i+"/"+o;case"mouth":return i+"/"+o;default:return a+"/"+i+"/"+o+" "+l+":"+u}}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l});var i=function(e,t){return function(n){return a(n[e],t)}},o=function(e,t,n){return function(r){var a=r[e].split(t).length;return n?a-1:a}},l=function(e,t){return function(n){var r=t.filter(function(t){return t.value===+n[e]});return r[0].text?r[0].text:"未知"}}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),i=n("79e5"),o=n("be13"),l=n("2b4c"),u=n("520a"),c=l("species"),s=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=l(e),p=!i(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),h=p?!i(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[f](""),!t}):void 0;if(!p||!h||"replace"===e&&!s||"split"===e&&!d){var m=/./[f],b=n(o,f,""[e],function(e,t,n,r,a){return t.exec===u?p&&!a?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),g=b[0],v=b[1];r(String.prototype,e,g),a(RegExp.prototype,f,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var r=n("aae3"),a=n("cb7c"),i=n("ebd6"),o=n("0390"),l=n("9def"),u=n("5f1b"),c=n("520a"),s=n("79e5"),d=Math.min,f=[].push,p="split",h="length",m="lastIndex",b=4294967295,g=!s(function(){RegExp(b,"y")});n("214f")("split",2,function(e,t,n,s){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(a,e,t);var i,o,l,u=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,p=void 0===t?b:t>>>0,g=new RegExp(e.source,s+"g");while(i=c.call(g,a)){if(o=g[m],o>d&&(u.push(a.slice(d,i.index)),i[h]>1&&i.index<a[h]&&f.apply(u,i.slice(1)),l=i[0][h],d=o,u[h]>=p))break;g[m]===i.index&&g[m]++}return d===a[h]?!l&&g.test("")||u.push(""):u.push(a.slice(d)),u[h]>p?u.slice(0,p):u}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):v.call(String(a),n,r)},function(e,t){var r=s(v,e,this,t,v!==n);if(r.done)return r.value;var c=a(e),f=String(this),p=i(c,RegExp),h=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),x=new p(g?c:"^(?:"+c.source+")",m),y=void 0===t?b:t>>>0;if(0===y)return[];if(0===f.length)return null===u(x,f)?[f]:[];var w=0,D=0,_=[];while(D<f.length){x.lastIndex=g?D:0;var j,k=u(x,g?f:f.slice(D));if(null===k||(j=d(l(x.lastIndex+(g?0:D)),f.length))===w)D=o(f,D,h);else{if(_.push(f.slice(w,D)),_.length===y)return _;for(var E=1;E<=k.length-1;E++)if(_.push(k[E]),_.length===y)return _;D=w=j}}return _.push(f.slice(w)),_}]})},"43d5":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return function(t,n){return t[e]-n[e]}}},"520a":function(e,t,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,l="lastIndex",u=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[l]||0!==t[l]}(),c=void 0!==/()??/.exec("")[1],s=u||c;s&&(o=function(e){var t,n,o,s,d=this;return c&&(n=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),u&&(t=d[l]),o=a.call(d,e),u&&o&&(d[l]=d.global?o.index+o[0].length:t),c&&o&&o.length>1&&i.call(o[0],n,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)}),o}),e.exports=o},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"644b":function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return u});var r=n("1e4e"),a=n("43d5"),i=[{prop:"_id",width:"200",label:"ID"},{prop:"name",width:null,label:"比赛名称"},{prop:"game_title",width:null,label:"比赛场地"},{prop:"time",width:"200",label:"方案创建时间",sortable:!0,formatter:Object(r["a"])("time")}],o=[{prop:"id",width:"80",label:"ID"},{prop:"track",width:null,label:"赛事名称"},{prop:"title",width:null,label:"赛事地址"},{prop:"time",width:"200",label:"赛事时间",sortable:!0,formatter:Object(r["a"])("time","day")}],l=[{prop:"num",width:"80",label:"场次顺序"},{prop:"id",width:null,label:"场次ID"},{prop:"describe",width:null,label:"场次名称"},{prop:"distance",width:null,label:"比赛距离"},{prop:"horseClass",width:"80",label:"班次"},{prop:"time",width:"200",label:"赛事时间",sortable:!0,formatter:Object(r["a"])("time")}],u=[{prop:"sort",width:"80",label:"#"},{prop:"horse_id",width:"80",label:"ID"},{prop:"name",width:null,label:"马匹名称"},{prop:"knight.name",width:null,label:"骑师"},{prop:"traniner.name",width:null,label:"练马师"},{prop:"fence",width:"80",label:"档位",sortable:!0,sortMethod:Object(a["a"])("fence")},{prop:"weight",width:"80",label:"负重",sortable:!0,sortMethod:Object(a["a"])("fence")}]},"6b12":function(e,t,n){"use strict";var r=n("859b"),a=n.n(r);a.a},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in a||n("9e1e")&&r(a,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},"859b":function(e,t,n){},aae3:function(e,t,n){var r=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c530:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("dj-breadcrumb",{attrs:{routerList:[{router:{name:"gameProjectList"},name:"即时比赛"},{router:{name:"gameProjectDetails",query:{id:e.$route.query.id}},name:"比赛详情"}]}}),n("el-table",{attrs:{data:e.tableData.list}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("game-details-table",{attrs:{data:t.row,name:e.name}})]}}])}),n("el-table-column",{attrs:{type:"index",width:"50"}}),e._l(e.gameDetails,function(e,t){return n("dj-table-column",{key:t,attrs:{item:e}})})],2)],1)},a=[],i=n("644b"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{ref:"horseTable",attrs:{data:e.data.scheduleDetails},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._l(e.horseTableList,function(e,t){return n("dj-table-column",{key:t,attrs:{item:e}})})],2),n("project-form",{on:{onSubmit:e.onSubmit}})],1)},l=[],u=(n("7f7f"),n("880a")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"project-form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"玩法"}},[n("el-radio-group",{model:{value:e.form.playMethod,callback:function(t){e.$set(e.form,"playMethod",t)},expression:"form.playMethod"}},e._l(e.playList,function(t){return n("el-radio",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name))])}),1)],1),n("el-form-item",{attrs:{label:"推荐理由"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.$emit("onSubmit",e.form)}}},[e._v("立即创建")])],1)],1)},s=[],d=n("dfc0"),f={data:function(){return{playList:d["a"],form:{playMethod:0,desc:""}}}},p=f,h=(n("6b12"),n("2877")),m=Object(h["a"])(p,c,s,!1,null,"349f489b",null),b=m.exports,g={components:{projectForm:b},props:{data:{type:Object,default:function(){return{}}},name:String},data:function(){return{horseTableList:i["c"],horseSelection:[]}},methods:{handleSelectionChange:function(e){console.log(e),this.horseSelection=e},onSubmit:function(e){var t=this.horseSelection.map(function(e){return e.horse_id}),n={schedule_id:this.$route.query.id,game_type:e.playMethod,data:[{game_id:this.data.num,horse_id:t.join("|")}],name:"".concat(this.name," 场次").concat(this.data.num),consume_type:"",consume:"",desc:e.desc,audio_url:null};Object(u["f"])("createPlan",n).then(function(e){console.log(e)})}}},v=g,x=Object(h["a"])(v,o,l,!1,null,null,null),y=x.exports,w={components:{gameDetailsTable:y},props:{data:{type:Array,default:function(){return[]}}},computed:{tableData:function(){var e=this,t=this.data.filter(function(t){return t.id===e.$route.query.id});return t.length?t[0]:{}},name:function(){var e=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],t=new Date(1e3*this.tableData.time);return t=t.getDay(),"【".concat(this.tableData.title,"】 ").concat(e[t]," ").concat(this.tableData.title).concat(this.tableData.track)}},data:function(){return{gameDetails:i["a"]}}},D=w,_=Object(h["a"])(D,r,a,!1,null,"1d586dca",null);t["default"]=_.exports},dfc0:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=[{name:"独赢",id:1},{name:"位置",id:2},{name:"连赢",id:3},{name:"位置Q",id:4},{name:"单T",id:5},{name:"孖宝",id:6},{name:"四连环",id:7},{name:"三重彩",id:8},{name:"四重彩",id:9},{name:"孖T",id:10},{name:"六环彩",id:11},{name:"三宝",id:12},{name:"三T",id:13}]}}]);
//# sourceMappingURL=chunk-470e1e00.29b528af.js.map