webpackJsonp([1],{"8cQg":function(t,e){},C4aK:function(t,e){},DbLx:function(t,e){},FEOs:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("xd7I"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("mu-appbar",{staticStyle:{width:"100%","text-align":"center",background:"linear-gradient(to right, #3f8aff, #8543ff)"},attrs:{color:"#fafafa","z-depth":"4",textColor:"white"}},[e("span",{staticClass:"color"},[e("a",{staticClass:"site_title",attrs:{href:"/"}},[this._v("\n          Fami\n          "),e("mu-icon",{staticStyle:{"vertical-align":"middle",margin:"-3px 0 0 -5px"},attrs:{value:"whatshot",color:"red",size:"20"}}),this._v("'s Repository\n        ")],1)])])],1),this._v(" "),e("div",[e("router-view")],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"beian"},[e("div",[this._v("苏ICP备15006533号-4")])])}]};var i=a("C7Lr")({name:"App",data:function(){return{docked:!1,open:!1,position:"left"}}},s,!1,function(t){a("gPIv")},"data-v-2df14b67",null).exports,r=a("xwKP"),o=a("aozt"),c=a.n(o),l=a("kwQW"),u=a("/Xo2"),d=a.n(u),m=a("X1H5"),h=a.n(m),p=(a("DbLx"),a("rudX"),a("C4aK"),a("Sy0n"),a("KGCO")),v={name:"Index",data:function(){return{keywords:""}},mounted:function(){this.WXshare(location.href,"刘俊洋的知识库")},methods:{toSearch:function(t){this.$router.push({name:"Search",query:{keywords:t}})}},watch:{keywords:function(t,e){this.keywords=t}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("mu-container",{staticClass:"body-head"},[a("mu-row",{attrs:{gutter:""}},[a("mu-col",{staticClass:"center",attrs:{span:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[a("div",{staticClass:"grid-cell"},[a("div",{staticClass:"index-logo"})])])],1),t._v(" "),a("mu-row",{attrs:{gutter:""}},[a("mu-col",{staticClass:"center",attrs:{span:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[a("div",{staticClass:"grid-cell"},[a("mu-paper",{staticClass:"demo-paper index-search-div",attrs:{"z-depth":4}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"index-search-div-input",attrs:{type:"text",placeholder:"寻你所想..."},domProps:{value:t.keywords},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toSearch(t.keywords)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),a("mu-button",{staticClass:"index-search-div-icon",attrs:{icon:"",small:"",color:"grey"},on:{click:function(e){return t.toSearch(t.keywords)}}},[a("mu-icon",{attrs:{value:"search",size:"30",color:"grey400"}})],1)],1)],1)])],1)],1),t._v(" "),a("mu-container",{staticClass:"body-main"}),t._v(" "),a("mu-container",{staticClass:"body-foot"})],1)},staticRenderFns:[]};var y=a("C7Lr")(v,f,!1,function(t){a("eUU4")},"data-v-bbb6072c",null).exports,g={name:"Search",data:function(){return{keywords:this.$route.query.keywords,result:[],index:0}},mounted:function(){this.search(this.keywords),this.WXshare(location.href,"搜索结果")},methods:{search:function(t){var e=this,a=this.$loading(),n={keywords:t};this.$axios.post("https://core.liujunyang.com/blog/articles/search",n).then(function(t){e.result=t.data,console.log(e.result.data),a.close()}).catch(function(t){console.log(t)})},toArticle:function(t){var e=this.$router.resolve({name:"Article",query:{id:t},replace:!0});window.open(e.href,"_blank")}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("mu-container",{staticClass:"body-head"},[a("mu-row",{attrs:{gutter:""}},[a("mu-col",{staticClass:"center",attrs:{span:"10",sm:"12",md:"8",lg:"8",xl:"8"}},[a("div",{staticClass:"grid-cell"},[a("mu-paper",{staticClass:"demo-paper index-search-div",attrs:{"z-depth":4}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"index-search-div-input",attrs:{type:"text",placeholder:"寻你所想..."},domProps:{value:t.keywords},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.keywords)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),a("mu-button",{staticClass:"index-search-div-icon",attrs:{icon:"",small:"",color:"grey"},on:{click:function(e){return t.search(t.keywords)}}},[a("mu-icon",{attrs:{value:"search",size:"30",color:"grey400"}})],1)],1)],1)])],1),t._v(" "),a("div",{staticClass:"captain m-t-5 m-b-2",staticStyle:{color:"white"}},[t._v("搜索结果")]),t._v(" "),a("mu-divider")],1),t._v(" "),a("mu-container",{staticClass:"body-main"},t._l(t.result.data,function(e,n){return a("mu-list",{key:e.id,attrs:{textline:"two-line"},on:{click:function(a){return t.toArticle(e.id)}}},[a("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[a("mu-list-item-content",[a("mu-list-item-title",{staticStyle:{color:"white"}},[t._v("\n            "+t._s(e.title)+"\n            "),0==n?a("span",[a("mu-badge",{attrs:{content:"推荐",color:"primary"}})],1):t._e()]),t._v(" "),a("mu-list-item-sub-title",{staticStyle:{color:"white"}},[t._v(t._s(e.content.replace(/<[^>]*>/g,"").slice(0,50)+"..."))])],1)],1)],1)}),1),t._v(" "),a("mu-container",{staticClass:"body-foot"})],1)},staticRenderFns:[]};var _=a("C7Lr")(g,w,!1,function(t){a("FEOs")},"data-v-a39b35f4",null).exports,C={name:"Article",data:function(){return{result:[]}},mounted:function(){this.loadArticle(this.$route.query.id)},methods:{loadArticle:function(t){var e=this,a=this.$loading();this.$axios.get("https://core.liujunyang.com/blog/articles/"+t).then(function(t){e.WXshare(location.href,t.data.data.title),e.result=t.data.data,a.close()}).catch(function(t){console.log(t)})}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.result.title+" - 刘俊洋的知识库",expression:"result.title+' - 刘俊洋的知识库'"}],staticClass:"page-container"},[a("mu-container",{staticClass:"body-head"}),t._v(" "),a("mu-container",{staticClass:"body-main"},[a("div",{staticClass:"doc-head"},[a("h2",[t._v(t._s(t.result.title))]),t._v(" "),a("h5",[t._v(t._s(t.result.created_at))])]),t._v(" "),a("div",{staticClass:"doc-body",domProps:{innerHTML:t._s(t.result.content)}}),t._v(" "),a("div",{staticClass:"doc-foot"})]),t._v(" "),a("mu-container",{staticClass:"body-foot"})],1)},staticRenderFns:[]};var x=a("C7Lr")(C,k,!1,function(t){a("8cQg")},null,null).exports;n.a.use(p.a);var b=new p.a({routes:[{path:"/",name:"Index",component:y,meta:{title:"刘俊洋的知识库"}},{path:"/search",name:"Search",component:_,meta:{title:"搜索 - 刘俊洋的知识库"}},{path:"/article",name:"Article",component:x,meta:{type:"article"}}]});n.a.use(r.a),n.a.use(l.a),n.a.use(d.a),n.a.config.productionTip=!1,n.a.prototype.$axios=c.a,n.a.prototype.WXshare=function(t,e){var n=location.href.split("#")[0].toLowerCase(),s=a("BvhE").Base64.encode(n);this.$axios.get("https://core.liujunyang.com/api/weixin/share/"+s).then(function(t){h.a.config({debug:!1,appId:t.data.appid,timestamp:t.data.timestamp,nonceStr:t.data.noncestr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline"]})}).catch(function(t){console.log(t)}),h.a.ready(function(){h.a.onMenuShareAppMessage({title:e,desc:"刘俊洋的知识库：分享一切尽可能让你看得懂的东西。",link:t,imgUrl:"https://www.liujunyang.com/static/images/wx_logo.png",success:function(){}}),h.a.onMenuShareTimeline({title:e,desc:"刘俊洋的知识库：分享一切尽可能让你看得懂的东西。",link:t,imgUrl:"https://www.liujunyang.com/static/images/wx_logo.png",success:function(){}})})},b.beforeEach(function(t,e,a){t.meta.title&&(document.title=t.meta.title,"article"!=t.meta.type&&document.querySelector("body").setAttribute("style","background: linear-gradient(to right, #3f8aff, #8543ff);")),a()}),new n.a({el:"#app",router:b,components:{App:i},template:"<App/>"})},Sy0n:function(t,e){},eUU4:function(t,e){},gPIv:function(t,e){},rudX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f37af84c29611e2f5f4f.js.map