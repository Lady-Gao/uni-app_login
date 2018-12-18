<template>
    <view class="content">
        <view class="btn-row">
            <button  type="default" @tap="bindLogout">退出登录</button>
        </view>
    </view>
</template>

<script>
    import {
        mapActions
    } from 'vuex'

    export default {
        computed: {
        },
        mounted() {
        },
        methods: {
            ...mapActions(['logout']),
            /**
             * 退出登陆
             */
            bindLogout() {
                this.logout();
                uni.reLaunch({
                    url: '../login/login',
                    });
                   
            }
        }
    }
</script>

<style>

</style>
