require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{28:function(t,e,a){"use strict";var n=s(a(2)),i=s(a(29));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},29:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(31),i=a.n(n),s=a(32);var o=function(t){a(30)},l=a(1)(i.a,s.a,o,null,null);e.default=l.exports},30:function(t,e){},31:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,i=a(4);(n=i)&&n.__esModule;e.default={data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?t.showToast({icon:"none",title:"邮箱地址不合法"}):t.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}}}).call(e,a(0).default)},32:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("邮箱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"3i8-0"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"D2v-1"},on:{tap:t.findPassword}},[t._v("提交")])],1)])},staticRenderFns:[]};e.a=n}},[28]);