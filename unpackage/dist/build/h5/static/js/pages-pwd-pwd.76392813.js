(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pwd-pwd"],{"40e8":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("935d"));var a={data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?uni.showToast({icon:"none",title:"邮箱地址不合法"}):uni.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};n.default=a},a134:function(t,n,e){"use strict";e.r(n);var i=e("40e8"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},aec3:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"input-group"},[e("v-uni-view",{staticClass:"input-row"},[e("v-uni-text",{staticClass:"title"},[t._v("邮箱：")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入邮箱"},model:{value:t.email,callback:function(n){t.email=n},expression:"email"}})],1)],1),e("v-uni-view",{staticClass:"btn-row"},[e("v-uni-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.findPassword.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})},d37b:function(t,n,e){"use strict";e.r(n);var i=e("aec3"),a=e("a134");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var r,s=e("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"377ec6c4",null,!1,i["a"],r);n["default"]=o.exports}}]);