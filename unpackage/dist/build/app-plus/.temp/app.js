require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([6],[,,,,,,function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=c(o(5)),a=c(o(8)),r=c(o(12)),s=c(o(4));function c(e){return e&&e.__esModule?e:{default:e}}u.default.config.productionTip=!1,u.default.prototype.$store=r.default,u.default.prototype.$service=s.default,a.default.mpType="app",new u.default(n({store:r.default},a.default)).$mount()},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(11),u=o.n(n);var a=function(e){o(9)},r=o(1)(u.a,null,a,null,null);t.default=r.exports},function(e,t){},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=a(o(5)),u=a(o(3));function a(e){return e&&e.__esModule?e:{default:e}}n.default.use(u.default);var r=new u.default.Store({state:{UserToken:"d23837"},mutations:{login:function(e,t){e.UserToken=t}},actions:{login:function(t,o){var n=this,u=t.commit;console.log(8),e.request({url:"http://10.10.11.192:18001/auth/oauth/token",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa("test:test")},data:"grant_type=newPassword&username="+o.userName+"&password="+o.password+"&enterpriseCode="+o.enterpriseCode,success:function(t){u("login",t),t.data.error?e.showToast({title:t.data.error_description,duration:2e3,icon:"none"}):(e.setStorageSync("USERS_KEY",t.data),e.showToast({title:"登陆成功",icon:"success",mask:!0,duration:2e3}))},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})},complete:function(e){n.loading=!1}})},logout:function(t,o){t.commit;e.clearStorage(),e.request({url:"http://10.10.11.192:18001/auth/logout",success:function(t){e.showToast({title:"退出登录",icon:"success",mask:!0,duration:2e3})},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})}},getters:{UserToken:function(e){return e.UserToken}}});t.default=r}).call(t,o(0).default)}],[6]);