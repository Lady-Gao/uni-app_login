(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"35c9":function(t,e,i){"use strict";i.r(e);var n=i("9e12"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"3ed9":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"input-group"},[i("v-uni-view",{staticClass:"input-row border"},[i("v-uni-text",{staticClass:"title"},[t._v("公司编号：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入公司编号"},model:{value:t.enterpriseCode,callback:function(e){t.enterpriseCode=e},expression:"enterpriseCode"}})],1),i("v-uni-view",{staticClass:"input-row border"},[i("v-uni-text",{staticClass:"title"},[t._v("账号：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),i("v-uni-view",{staticClass:"input-row"},[i("v-uni-text",{staticClass:"title"},[t._v("密码：")]),i("v-uni-input",{attrs:{type:"text",password:"true",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),i("v-uni-view",{staticClass:"btn-row"},[i("v-uni-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindLogin.apply(void 0,arguments)}}},[t._v("登录")])],1),i("v-uni-view",{staticClass:"action-row"},[i("v-uni-navigator",{attrs:{url:"../reg/reg"}},[t._v("注册账号")]),i("v-uni-text",[t._v("|")]),i("v-uni-navigator",{attrs:{url:"../pwd/pwd"}},[t._v("忘记密码")])],1)],1)},r=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},"7d33":function(t,e,i){"use strict";var n=i("aa38"),a=i.n(n);a.a},"9e12":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cebc")),r=(n(i("935d")),i("2f62")),o={computed:(0,a.default)({},(0,r.mapGetters)(["UserToken"])),onLoad:function(){uni.getStorageSync("USERS_KEY")&&uni.reLaunch({url:"../main/main"})},data:function(){return{enterpriseCode:"111111111",userName:"test2",password:"123456"}},methods:(0,a.default)({},(0,r.mapActions)(["login"]),{bindLogin:function(){this.login({enterpriseCode:this.enterpriseCode,userName:this.userName,password:this.password})}}),watch:{UserToken:function(t){uni.setStorage({key:"USERS_KEY",data:t,success:function(){uni.reLaunch({url:"../main/main"})}})}}};e.default=o},aa38:function(t,e,i){var n=i("e73b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2459a8bf",n,!0,{sourceMap:!1,shadowMode:!1})},ddad:function(t,e,i){"use strict";i.r(e);var n=i("3ed9"),a=i("35c9");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("7d33");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5208bd96",null,!1,n["a"],o);e["default"]=u.exports},e73b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".action-row[data-v-5208bd96]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.action-row uni-navigator[data-v-5208bd96]{color:#007aff;padding:0 %?20?%}.oauth-row[data-v-5208bd96]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;top:0;left:0;width:100%}.oauth-image[data-v-5208bd96]{width:%?100?%;height:%?100?%;border:%?1?% solid #ddd;border-radius:%?100?%;margin:0 %?40?%;background-color:#fff}.oauth-image uni-image[data-v-5208bd96]{width:%?60?%;height:%?60?%;margin:%?20?%}",""])}}]);