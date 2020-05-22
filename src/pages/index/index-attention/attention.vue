<template>
    <!-- 没有关注 -->
    <scroll-view class="noneContent" scroll-y="true">
        <view class="attention_warp">
            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/noneData.png"></image>
            <view class="txt">你还没有关注任何人</view>
        </view>
        <!-- 推荐 -->
        <view class="recommend_warp">
            <view class="titleName">为你推荐</view>
            <view class="recommendList">
                <view class="listItem">
                    <view class="personInfo">
                        <view class="userInfo">
                            <image class="headUrl" src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
                            <view class="message">
                                <view class="nickName">用户昵称</view>
                                <view class="signature">个人介绍</view>
                            </view>
                        </view>
                        <view class="attentionBox">
                            <view class="attention">关注</view>
                            <!-- <view class="attentionAble">已关注</view> -->
                        </view>
                    </view>
                    <view class="imgList">
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                    </view>
                </view>
                <view class="listItem">
                    <view class="personInfo">
                        <view class="userInfo">
                            <image class="headUrl" src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
                            <view class="message">
                                <view class="nickName">用户昵称</view>
                                <view class="signature">个人介绍</view>
                            </view>
                        </view>
                        <view class="attentionBox">
                            <!-- <view class="attention">关注</view> -->
                            <view class="attentionAble">已关注</view>
                        </view>
                    </view>
                    <view class="imgList">
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                    </view>
                </view>
                <view class="listItem">
                    <view class="personInfo">
                        <view class="userInfo">
                            <image class="headUrl" src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
                            <view class="message">
                                <view class="nickName">用户昵称</view>
                                <view class="signature">个人介绍</view>
                            </view>
                        </view>
                        <view class="attentionBox">
                            <view class="attention">关注</view>
                            <!-- <view class="attentionAble">已关注</view> -->
                        </view>
                    </view>
                    <view class="imgList">
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                        <image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
                    </view>
                </view>
            </view>
        </view>
    </scroll-view>
    <!-- 有关注 -->
    <!-- <view>关注

        <easy-loadimage></easy-loadimage>
    </view> -->
</template>

<script>
    import easyLoadimage from "@/components/easy-loadimage/easy-loadimage.vue"
    export default {
		data() {
			return {
				
			}
		},
		components: {
			easyLoadimage,
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "attention.scss";
</style>