import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        UserToken: "d23837",//用户相关token
    },
    mutations: {
        login(state, params) {
            state.UserToken=params
        },
       
    },
    actions:{
        login({commit},params){
            console.log(8)
            uni.request({
                url: "http://10.10.11.192:18001/auth/oauth/token",
                method:"POST",
                header:{
                    'Content-Type': 'application/x-www-form-urlencoded' ,
                    "Authorization": "Basic " + btoa('test:test')
                },
                data: "grant_type=newPassword&username="+params.userName+"&password="+params.password+"&enterpriseCode="+params.enterpriseCode,
                success: (res) => {
                    commit("login",res)
                    if(res.data.error){
                        uni.showToast({
                            title: res.data.error_description,
                            duration: 2000,
                            icon: 'none',
                        })
                    }else{
                        // commit("login",res.data)
                        //本地存储用户信息
                        uni.setStorageSync('USERS_KEY',res.data);
                        uni.showToast({
                            title: '登陆成功',
                            icon: 'success',
                            mask: true,
                            duration: 2000
                        })
                    }
                },
                fail: (err) => {
                    uni.showModal({
                        content:err.errMsg,
                        showCancel:false
                    })
                },
                complete:(e)=> {
                    this.loading = false
                    // uni.showModal({
                    //     content:e.errMsg,
                    //     showCancel:false
                    // })
                }
            })
        },
        logout({commit},params){
            uni.clearStorage()//清除本地
            uni.request({
                url:"http://10.10.11.192:18001/auth/logout",
                success: (res) => {
                    uni.showToast({
                        title: '退出登录',
                        icon: 'success',
                        mask: true,
                        duration: 2000
                    })
                },
                fail: (err) => {
                    uni.showModal({
                        content:err.errMsg,
                        showCancel:false
                    })
                },
            })
            
        }
    },
    getters:{
        UserToken(state){
            return state.UserToken
        }
    }
})

export default store
