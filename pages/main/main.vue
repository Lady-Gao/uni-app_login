<template>
    <view class="content">
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers" @markertap="markertap">
                </map>
            </view>
        </view>  
    </view>
</template>

<script>
 import {
        mapGetters
    } from 'vuex'
    export default {
			data(){
				return {
					 title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742, 
                iconPath: '../../static/qq.png'
            }]
				}
			},
        computed:{
                ...mapGetters(['UserToken']),
            user(){
                return this.$service.getUsers()
            }
        },
        mounted() {
            let that=this
       setTimeout(() => {
           uni.getLocation({
    success: function (res) {
     
            that.latitude=res.latitude
            that.longitude=res.longitude
 that.covers= [{
                latitude: res.latitude,
                longitude: res.longitude, 
                iconPath: '../../static/qq.png'
            }]
        console.log('位置名称：' + res.name);
        console.log('详细地址：' + res.address);
        console.log('纬度：' + res.latitude);
        console.log('经度：' + res.longitude);
    }
});
       }, 10000);
        },
        onShow() {
            return
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
        methods:{
            markertap(){
                console.log("markertap")
            }

        },
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50px;
    }

    .ul {
        font-size: 30px;
        color: #8f8f94;
        margin-top: 50px;
    }

    .ul>view {
        line-height: 50px;
    }
</style>
