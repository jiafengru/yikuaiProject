<template>
	<scroll-view scroll-y id="Box" @scroll="scrollPage">
		<view id="topBar" :style="{opacity: opacity}">{{userName}}</view>
		<view class="diyHomePage">
			<image class="drafts" src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_drafts.png"></image>
		</view>
		<view class="personalInfo">
			<view class="infoTop">
				<view class="header">
					<image :src="headUrl"></image>
				</view>
				<view class="dataCount">
					<view class="countBox">
						<view class="number">1.1W</view>
						<view class="name">关注</view>
					</view>
					<view class="countBox">
						<view class="number">1.2W</view>
						<view class="name">粉丝</view>
					</view>
					<view class="countBox">
						<view class="number">1.3W</view>
						<view class="name">获赞和收藏</view>
					</view>
				</view>
			</view>
			<view class="nickName">{{userName}}</view>
			<view class="personalPs">个性签名</view>
			
			<view class="editProfileBox">
				<view class="editProfile">编辑资料</view>
			</view>
		</view>
		<button type="primary" id="navigationBar">
			<view class="navigationCon">
				<view :class="{list: true, active: currentTab == index}" v-for="(listItem, index) in navigationList" :key="index" :data-index="index" @tap="navigationTap">{{listItem}}</view>
				<view class="line" :style="{transform: 'translateX('+ lineActive + 'px)'}"></view>
			</view>
		</button>
		<view class="mainContent">
			<view class="left">
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E5%8D%B8%E5%A6%86%E6%B0%B4%285%29%281%29.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/6.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E5%8D%B8%E5%A6%86%E6%B0%B4%285%29%281%29.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/22.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
			</view>
			<view class="right">
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E5%8D%B8%E5%A6%86%E6%B0%B4%285%29%281%29.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/22.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
				<view class="module">
					<view class="imgBox">
						<image mode="widthFix" src="https://images.hylpz.cn/data/images/banner/%E5%8D%B8%E5%A6%86%E6%B0%B4%285%29%281%29.png"></image>
					</view>
					<view class="title">标题</view>
					<view class="message">
						<view class="personalMsg">
							<image src="https://images.hylpz.cn/data/images/common/chathead/6.jpg"></image>
							<view class="nickName">昵称</view>
						</view>
						<view class="browsing">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
							<view class="count">12345</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				opacity: 0,
				navigationWidth: 0,
				navigationListWidth: 0,
				lineWidth: 0,
				distanceTop: 0,
				navigationList: [
					"我的分享",
					"收藏",
					"赞过",
				],
				currentTab: 0,
				distanceTop: "", // 距离
				lineActive: 0,
				userName: "",
				headUrl: "",
			}
		},
		onLoad() {
			// 获取导航栏的信息
			this.getNavMsg();
			console.log(this.globalData.userInfo)
			this.userName = JSON.parse(this.globalData.userInfo).nickName;
			this.headUrl = JSON.parse(this.globalData.userInfo).avatarUrl;
		},
		onShow() {
			this.setTabBarIndex(4);
		},
	
		methods: {
			
			getNavMsg(){
				var that = this
				uni.createSelectorQuery().select('.navigationCon').boundingClientRect(function (rect) {
					that.navigationWidth = rect.width;
					that.distanceTop = rect.top;
				}).exec()
				uni.createSelectorQuery().select('.line').boundingClientRect(function (rect) {
					that.lineWidth = rect.width;
					that.navigationListWidth = that.navigationWidth / 3;
					that.separationDistance = (that.navigationWidth / 3 - that.lineWidth) / 2;
					that.lineActive = that.separationDistance;
				}).exec()
			},

			navigationTap(e){
				var index = e.currentTarget.dataset.index;
				var distance;
				distance = this.navigationListWidth * index + this.separationDistance;
				this.currentTab = index,
				this.lineActive = distance;
			},
			scrollPage(e){
				var scrollTop = e.detail.scrollTop;
				this.opacity = (e.detail.scrollTop / 100)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "index.scss";
</style>