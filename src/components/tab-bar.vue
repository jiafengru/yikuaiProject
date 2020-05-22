<template>
	<view class="tabBar">
		<view class="tabBarCon" data-index="0" @tap="switchPage">
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/home_hl.png" v-if="currentTab == 0"></image>
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/home.png" v-else></image>
            <view :class="{name: true, active: currentTab == 0}">广场</view>
        </view>
		<view class="tabBarCon" data-index="1" @tap="switchPage">
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/community_hl.png" v-if="currentTab == 1"></image>
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/community.png" v-else></image>
            <view :class="{name: true, active: currentTab == 1}">社区</view>
        </view>
		<view class="tabBar_publish" data-index="2" @tap="switchPage">
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/publish.png"></image>
        </view>
		<view class="tabBarCon" data-index="3" @tap="switchPage">
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/message_hl.png" v-if="currentTab == 3"></image>
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/message.png" v-else></image>
            <view :class="{name: true, active: currentTab == 3}">消息</view>
        </view>
		<view class="tabBarCon" data-index="4" @tap="switchPage">
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/personal_hl.png" v-if="currentTab == 4"></image>
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/personal.png" v-else></image>
            <view :class="{name: true, active: currentTab == 4}">我的</view>
        </view>
	</view>
</template>

<script>
	export default {
        // 声明要接收的父组件传递过来的属性
        props: {
            
        },
        
        data (){
            return {
                currentTab: 0
            }
        },
        created() {
            this.currentTab = this.globalData.currentTab;
        },
        methods: {
            // 切换页面
            switchPage(e){
                var index = e.currentTarget.dataset.index;
                this.globalData.currentTab = index;
                if (index == 0){
                    uni.switchTab({
                        url: '/pages/index/index',
                    })
                } else if(index == 1){
                    uni.switchTab({
                        url: '/pages/community/index',
                    })
                } else if(index == 2){
                    
                } else if(index == 3){
                    uni.switchTab({
                        url: '/pages/news/index',
                    })
                } else if(index == 4){
                    uni.switchTab({
                        url: '/pages/personal/index',
                    })
                }
            }
        },
	}
</script>

<style lang="scss" scoped>
	.tabBar{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background: url(https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/tabbar.png) no-repeat;
        background-size: 100% 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding-bottom: calc(env(safe-area-inset-bottom) /2);
        .tabBarCon{
            flex: 1;
            height: 100%;
            margin-top: 20px;
            image{
                width: 36rpx;
                height: 36rpx;
                display: block;
                margin: 11px auto 4px;
            }
            .name{
                width: 100%;
                font-size: 10px;
                line-height: 10px;
                text-align: center;
                color: #6D7278;
            }
            .active{
                color: #2C2C2C;
            }
        }
        .tabBar_publish{
            width: 53px;
            height: 53px;
            flex-shrink: 0;
            position: relative;
            top: -14rpx;
            image{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
</style>