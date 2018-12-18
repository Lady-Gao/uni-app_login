require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],[,,,,,,,,,,,,,function(e,t,a){"use strict";var r=n(a(2)),s=n(a(14));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(s.default))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(16),s=a.n(r),n=a(17);var i=function(e){a(15)},o=a(1)(s.a,n.a,i,null,null);t.default=o.exports},function(e,t){},function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(4),i=((r=n)&&r.__esModule,a(3));t.default={computed:s({},(0,i.mapGetters)(["UserToken"])),onLoad:function(){e.getStorageSync("USERS_KEY")&&e.reLaunch({url:"../main/main"})},data:function(){return{enterpriseCode:"111111111",userName:"test2",password:"123456"}},methods:s({},(0,i.mapActions)(["login"]),{bindLogin:function(){this.login({enterpriseCode:this.enterpriseCode,userName:this.userName,password:this.password})}}),watch:{UserToken:function(t){e.setStorage({key:"USERS_KEY",data:t,success:function(){e.reLaunch({url:"../main/main"})}})}}}}).call(t,a(0).default)},function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[e._v("公司编号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enterpriseCode,expression:"enterpriseCode"}],attrs:{type:"text",placeholder:"请输入公司编号",eventid:"Io1-0"},domProps:{value:e.enterpriseCode},on:{input:function(t){t.target.composing||(e.enterpriseCode=t.target.value)}}})]),a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[e._v("账号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"请输入账号",eventid:"pfr-1"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[e._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入密码",eventid:"3Cl-2"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"uce-3"},on:{tap:e.bindLogin}},[e._v("登录")])],1),a("view",{staticClass:"action-row"},[a("navigator",{attrs:{url:"../reg/reg"}},[e._v("注册账号")]),a("text",[e._v("|")]),a("navigator",{attrs:{url:"../pwd/pwd"}},[e._v("忘记密码")])],1)])},staticRenderFns:[]};t.a=r}],[13]);