webpackJsonp([1],{"71gn":function(t,e){},"9RDY":function(t,e){},C4aK:function(t,e){},DbLx:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("xd7I"),s={name:"App",data:function(){return{open:!1}},mounted:function(){this.$router.afterEach(function(t,e,a){window.scrollTo(0,0)})},methods:{closeBottomSheet:function(){this.open=!1},openBotttomSheet:function(){this.open=!0}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("mu-appbar",{staticStyle:{width:"100%","text-align":"center",background:"linear-gradient(to right, #3f8aff, #8543ff)"},attrs:{color:"#fafafa","z-depth":"4",textColor:"white"}},[a("span",{staticClass:"color"},[a("a",{staticClass:"site_title",attrs:{href:"/"}},[t._v("\n          Fami\n          "),a("mu-icon",{staticStyle:{"vertical-align":"middle",margin:"-3px 0 0 -5px"},attrs:{value:"whatshot",color:"red",size:"20"}}),t._v("'s Repository\n        ")],1)])])],1),t._v(" "),a("div",[a("router-view")],1),t._v(" "),a("div",{staticClass:"beian"},[a("div",{on:{click:t.openBotttomSheet}},[t._v("联系我")]),t._v(" "),a("div",[t._v("苏ICP备15006533号-4")])]),t._v(" "),a("mu-bottom-sheet",{attrs:{open:t.open,"lock-scroll":!0},on:{"update:open":function(e){t.open=e}}},[a("mu-list",{on:{"item-click":t.closeBottomSheet}},[a("mu-sub-header",[t._v("选择一种方式")]),t._v(" "),a("mu-list-item",{attrs:{button:"",href:"mailto:famio@qq.com"}},[a("mu-list-item-action",[a("mu-icon",{attrs:{value:"email",color:"blue"}})],1),t._v(" "),a("mu-list-item-title",[t._v("E-mail")])],1),t._v(" "),a("mu-list-item",{attrs:{button:"",href:"tencent://message/?uin=690938288&Site=liujunyang.com&Menu=yes"}},[a("mu-list-item-action",[a("mu-icon",{attrs:{value:"chat",color:"blue"}})],1),t._v(" "),a("mu-list-item-title",[t._v("QQ")])],1)],1)],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(s,i,!1,function(t){a("REPU")},"data-v-17f62f50",null).exports,r=a("xwKP"),c=a("aozt"),l=a.n(c),u=a("kwQW"),d=a("/Xo2"),m=a.n(d),h=a("X1H5"),p=a.n(h),v=a("wEua"),f=(a("DbLx"),a("rudX"),a("C4aK"),a("Sy0n"),a("KGCO")),y={name:"Index",data:function(){return{keywords:""}},mounted:function(){this.WXshare(location.href,"刘俊洋的知识库")},methods:{toSearch:function(t){""==this.keywords?this.$toast.message("搜索内容不能为空"):this.$router.push({name:"Search",query:{keywords:t}})}},watch:{keywords:function(t,e){this.keywords=t}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("mu-container",{staticClass:"body-head"},[a("mu-row",{attrs:{gutter:""}},[a("mu-col",{staticClass:"center",attrs:{span:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[a("div",{staticClass:"grid-cell"},[a("div",{staticClass:"index-logo"})])])],1),t._v(" "),a("mu-row",{attrs:{gutter:""}},[a("mu-col",{staticClass:"center",attrs:{span:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[a("div",{staticClass:"grid-cell"},[a("mu-paper",{staticClass:"demo-paper index-search-div",attrs:{"z-depth":4}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"index-search-div-input",attrs:{type:"text",placeholder:"寻你所想..."},domProps:{value:t.keywords},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toSearch(t.keywords)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),a("mu-button",{staticClass:"index-search-div-icon",attrs:{icon:"",small:"",color:"grey"},on:{click:function(e){return t.toSearch(t.keywords)}}},[a("mu-icon",{attrs:{value:"search",size:"30",color:"grey400"}})],1)],1)],1)])],1)],1),t._v(" "),a("mu-container",{staticClass:"body-main"},[a("div",{staticClass:"slogan"},[t._v("I don't know everything.")]),t._v(" "),a("div",{staticClass:"slogan"},[t._v("Just share as much as I can.")])]),t._v(" "),a("mu-container",{staticClass:"body-foot"})],1)},staticRenderFns:[]};var _=a("C7Lr")(y,g,!1,function(t){a("9RDY")},"data-v-453ae8f6",null).exports,w={name:"Search",data:function(){return{keywords:this.$route.query.keywords,result:[],index:0}},mounted:function(){this.search(this.keywords),this.WXshare(location.href,"搜索结果")},methods:{search:function(t){if(""==this.keywords)this.$toast.message("搜索内容不能为空");else{var e=this,a=this.$loading(),n={keywords:t};this.$axios.post("https://core.liujunyang.com/blog/articles/search",n).then(function(t){e.result=t.data,console.log(e.result.data),a.close()}).catch(function(t){console.log(t)})}},toArticle:function(t){var e=this.$router.resolve({name:"Article",query:{id:t},replace:!0});window.open(e.href,"_blank")}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("mu-container",{staticClass:"body-head"},[a("mu-row",{attrs:{gutter:""}},[a("mu-col",{staticClass:"center",attrs:{span:"10",sm:"12",md:"8",lg:"8",xl:"8"}},[a("div",{staticClass:"grid-cell"},[a("mu-paper",{staticClass:"demo-paper index-search-div",attrs:{"z-depth":4}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"index-search-div-input",attrs:{type:"text",placeholder:"寻你所想..."},domProps:{value:t.keywords},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.keywords)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),a("mu-button",{staticClass:"index-search-div-icon",attrs:{icon:"",small:"",color:"grey"},on:{click:function(e){return t.search(t.keywords)}}},[a("mu-icon",{attrs:{value:"search",size:"30",color:"grey400"}})],1)],1)],1)])],1),t._v(" "),a("div",{staticClass:"captain m-t-5 m-b-2",staticStyle:{color:"white"}},[t._v("搜索结果")]),t._v(" "),a("mu-divider")],1),t._v(" "),a("mu-container",{staticClass:"body-main"},t._l(t.result.data,function(e,n){return a("mu-list",{key:e.id,attrs:{textline:"two-line"},on:{click:function(a){return t.toArticle(e.id)}}},[a("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[a("mu-list-item-content",[a("mu-list-item-title",{staticStyle:{color:"white"}},[t._v("\n            "+t._s(e.title)+"\n            "),0==n?a("span",[a("mu-badge",{attrs:{content:"推荐",color:"primary"}})],1):t._e()]),t._v(" "),a("mu-list-item-sub-title",{staticStyle:{color:"white"}},[t._v(t._s(e.content.replace(/<[^>]*>/g,"").slice(0,50)+"..."))])],1)],1)],1)}),1),t._v(" "),a("mu-container",{staticClass:"body-foot"})],1)},staticRenderFns:[]};var C=a("C7Lr")(w,k,!1,function(t){a("71gn")},"data-v-3ff8a6c5",null).exports,b={name:"Article",data:function(){return{result:[]}},mounted:function(){this.loadArticle(this.$route.query.id),document.querySelector("body").setAttribute("style","background: #fafafa;")},methods:{loadArticle:function(t){var e=this,a=this.$loading();this.$axios.get("https://core.liujunyang.com/blog/articles/"+t).then(function(t){e.WXshare(location.href,t.data.data.title),e.result=t.data.data,a.close()}).catch(function(t){console.log(t)})}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.result.title+" - 刘俊洋的知识库",expression:"result.title+' - 刘俊洋的知识库'"}],staticClass:"page-container"},[a("mu-container",{staticClass:"body-head"}),t._v(" "),a("mu-container",{staticClass:"body-main"},[a("div",{staticClass:"doc-head"},[a("h2",[t._v(t._s(t.result.title))]),t._v(" "),a("h5",[t._v(t._s(t.result.created_at))])]),t._v(" "),a("div",{staticClass:"doc-body",domProps:{innerHTML:t._s(t.result.content)}}),t._v(" "),a("div",{staticClass:"doc-foot"})]),t._v(" "),a("mu-container",{staticClass:"body-foot"})],1)},staticRenderFns:[]};var S=a("C7Lr")(b,x,!1,function(t){a("y8C0")},null,null).exports;n.a.use(f.a);var $=new f.a({routes:[{path:"/",name:"Index",component:_,meta:{title:"刘俊洋的知识库"}},{path:"/search",name:"Search",component:C,meta:{title:"搜索 - 刘俊洋的知识库"}},{path:"/article",name:"Article",component:S,meta:{type:"article"}}]});n.a.use(r.a),n.a.use(u.a),n.a.use(m.a),n.a.use(v.a),n.a.config.productionTip=!1,n.a.prototype.$axios=l.a,n.a.prototype.WXshare=function(t,e){var n=location.href.split("#")[0].toLowerCase(),s=a("BvhE").Base64.encode(n);this.$axios.get("https://core.liujunyang.com/api/weixin/share/"+s).then(function(t){p.a.config({debug:!1,appId:t.data.appid,timestamp:t.data.timestamp,nonceStr:t.data.noncestr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline"]})}).catch(function(t){console.log(t)}),p.a.ready(function(){p.a.onMenuShareAppMessage({title:e,desc:"刘俊洋的知识库：分享一切尽可能让你看得懂的东西。",link:t,imgUrl:"https://www.liujunyang.com/static/images/wx_logo.png",success:function(){}}),p.a.onMenuShareTimeline({title:e,desc:"刘俊洋的知识库：分享一切尽可能让你看得懂的东西。",link:t,imgUrl:"https://www.liujunyang.com/static/images/wx_logo.png",success:function(){}})})},$.beforeEach(function(t,e,a){t.meta.title&&(document.title=t.meta.title,"article"!=t.meta.type&&document.querySelector("body").setAttribute("style","background: linear-gradient(to right, #3f8aff, #8543ff);")),a()}),new n.a({el:"#app",router:$,components:{App:o},template:"<App/>"})},REPU:function(t,e){},Sy0n:function(t,e){},rudX:function(t,e){},y8C0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0dfaaf12e364daa7f57c.js.map