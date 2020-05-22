<template>
    <view class="authorization" v-if="authorizationStatus">
        <button open-type="getUserInfo" @getuserinfo='getUserInfo'>微信授权</button>
    </view>
</template>

<script>
    export default {
        data() {
			return {
                authorizationStatus: false
			}
		},
         mounted () {
            var that = this;
            uni.getSetting({
                success(res) {
                    if (!res.authSetting['scope.userInfo']){
                        that.authorizationStatus = true;
                    }else {
                        uni.getUserInfo({
                            lang: "zh_CN", 
                            success(res){
                                that.globalData.userInfo = res.rawData;
                            }
                        })
                        that.authorizationStatus = false;
                    }
                }
            })
        },
        methods: {
            getUserInfo(){
                var that = this;
                uni.getUserInfo({
                    lang: "zh_CN", 
                    success(res){
                        that.authorizationStatus = false;
                        that.globalData.userInfo = res.rawData;
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .authorization{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        button{
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
</style>