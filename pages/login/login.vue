<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">公司编号：</text>
                <input type="text" v-model="enterpriseCode" placeholder="请输入公司编号">
            </view>
            <view class="input-row border">
                <text class="title">账号：</text>
                <input type="text" v-model="userName" placeholder="请输入账号">
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <input type="text" password="true" v-model="password" placeholder="请输入密码">
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            <navigator url="../reg/reg">注册账号</navigator>
            <text>|</text>
            <navigator url="../pwd/pwd">忘记密码</navigator>
        </view>
         
    </view>
</template>

<script>
    import service from '../../service.js';
    import {
        mapActions,
        mapState,
        mapGetters
    } from 'vuex'

    export default {
        computed:{
            ...mapGetters(['UserToken'])
        },
        onLoad() {
        /**
         * tokent验证
         */
      
          if(uni.getStorageSync('USERS_KEY')){
               uni.reLaunch({
                        url: '../main/main'
                });
          }
        },
        data() {
            return {
                enterpriseCode:"111111111",
                userName: 'test2',
                password: '123456',
            }
        },
        methods: {
            ...mapActions(['login']),
            /**
             * 请求token
             */
            bindLogin(){
                this.login({
                    enterpriseCode:this.enterpriseCode,
                    userName:this.userName,
                    password:this.password
                })
            }
        },
        watch:{
           //token成功
            UserToken(val){
                uni.setStorage({
                key: 'USERS_KEY',
                data: val,
                success: function () {
                     uni.reLaunch({
                        url: '../main/main'
                     });
                }
            });
                        
            }
        }
    }
</script>

<style>
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #007aff;
        padding: 0 20px;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100px;
        height: 100px;
        border: 1px solid #dddddd;
        border-radius: 100px;
        margin: 0 40px;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60px;
        height: 60px;
        margin: 20px;
    }
</style>
