<template>
    <view class="content">
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers" @markertap="markertap">
                </map>
            </view>
        </view>  
         <view class="input-row ">
                <text class="title"> 纬度： {{latitude}}</text>
            </view>
         <view class="input-row ">
                <text class="title">经度： {{longitude}}</text>
            </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="getlatlog">获取当前经纬度</button>
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
            latitude: null,
            longitude:null,
            covers: []
				}
			},
        computed:{
                ...mapGetters(['UserToken']),
            user(){
                return this.$service.getUsers()
            }
        },
        mounted() {
           
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
            },
            getlatlog(){
                 let that=this
           uni.getLocation({
    success: function (res) {
     console.log(res)
            that.latitude=res.latitude
            that.longitude=res.longitude
 that.covers= [{
                latitude: res.latitude,
                longitude: res.longitude, 
                iconPath: '../../static/img/qq.png',
                width:45,
                height:50
            }]
        console.log('位置名称：' + res.name);
        console.log('详细地址：' + res.address);
        console.log('纬度：' + res.latitude);
        console.log('经度：' + res.longitude);
    }
});
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
