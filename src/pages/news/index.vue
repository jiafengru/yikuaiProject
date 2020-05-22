<template>
	<view id="Box">
		<view class="content">
			<view class="list">
				<image class="icon" src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_system.png"></image>
				<view class="information">
					<view class="tit">系统消息</view>
					<view class="count">1</view>
				</view>
			</view>
			<view class="list">
				<image class="icon" src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_attention.png"></image>
				<view class="information">
					<view class="tit">收到的关注</view>
					<view class="count">1</view>
				</view>
			</view>
			<view class="list">
				<image class="icon" src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_praise.png"></image>
				<view class="information">
					<view class="tit">收到的赞</view>
					<view class="count">11</view>
				</view>
			</view>
			<view class="list">
				<image class="icon" src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_comment.png"></image>
				<view class="information">
					<view class="tit">收到的评论和@</view>
					<view class="count">1</view>
				</view>
			</view>
			<view class="list">
				<image class="icon" src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_privateLetter.png"></image>
				<view class="information">
					<view class="tit">我的私信</view>
					<view class="count">12</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log(this.requestUrl)
		},
		onShow() {
			this.setTabBarIndex(3);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "index.scss";
</style>