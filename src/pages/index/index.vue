<template>
	<view id="Box">
		<view id="header">
			<view id="navigationBar">
				<view class="navigationCon">
					<view :class="{list: true, active: currentTab == index}" v-for="(listItem, index) in navigationList" :key="index" :data-index="index" @tap="navigationTap(index)">
						{{listItem}}
						<view v-if="(index != 0) && (currentTab == index)" :class="{triangle: true, rotate: categorySign == 1}"></view>
					</view>
					<view class="line" :style="{transform: 'translateX('+ lineActive + 'px)'}"></view>
				</view>
			</view>
			<view class="search_warp">
				<view class="searchBox">
					<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_search.png" class="searchIcon"></image>
					<view class="search">搜索</view>
				</view>
			</view>
		</view>
		<swiper id="content" :current="currentTab" @change="swiperChange">
			<!-- 关注 -->
			<swiper-item>
				<attention></attention>
			</swiper-item>
			<!-- 好物 -->
			<swiper-item>
				<finegoods></finegoods>
			</swiper-item>
			<!-- 雷品 -->
			<swiper-item>
				<badgoods></badgoods>
			</swiper-item>
		</swiper>

		<view id="categoryMark" v-if="isCategoryMark" data-click="categoryMark" @tap="handelCategory" @touchmove.stop.prevent="moveHandle">
			<view class="categoryCon" data-click="categoryCon" @tap="handelCategory">
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">全部</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">数码</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">美食</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">美妆</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">家装/家居/厨具</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">服装/饰品</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">宠物</view>
				</view>
				<view class="categoryItem">
					<image src=""></image>
					<view class="name">玩具</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import attention from "./index-attention/attention";
	import finegoods from "./index-finegoods/finegoods";
	import badgoods from "./index-badgoods/badgoods";

	export default {
		data() {
			return {
				navigationWidth: 0,
				navigationListWidth: 0,
				lineWidth: 0,
				distanceTop: 0,
				navigationList: [
					"关注",
					"好物",
					"雷品",
				],
				currentTab: 0,
				distanceTop: "", // 距离
				lineActive: 0,
				isCategoryMark: false,
				categorySign: 0
			}
		},
		components: {
			attention,
			finegoods,
			badgoods,
		},
		onLoad() {
			console.log(this.requestUrl)
			console.log(this.currentTab)
			this.getNavMsg();
		},
		onShow() {
			this.setTabBarIndex(0);
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
					that.navigationTap(1);
				}).exec()
			},

			swiperChange(e){
				var distance,
					index = e.detail.current;
				distance = this.navigationListWidth * index + this.separationDistance;
				this.currentTab = index,
				this.lineActive = distance;
			},

			navigationTap(index){
				var distance;
				if(this.currentTab != index){
					distance = this.navigationListWidth * index + this.separationDistance;
					this.currentTab = index;
					this.lineActive = distance;
					this.categorySign = 0;
					this.isCategoryMark = false;
				}else if(this.currentTab == index){
					if((index != 0) && this.categorySign == 0){
						this.categorySign = 1;
						this.isCategoryMark = true;
					}else {
						this.categorySign = 0;
						this.isCategoryMark = false;
					}
				}
			},
			handelCategory(e){
				var click = e.currentTarget.dataset.click;
				if(click == "categoryMark"){
					this.categorySign = 0;
					this.isCategoryMark = false;
				}
			},
			moveHandle(){ return; }
		}
	}
</script>

<style lang="scss" scoped>
	@import "index.scss";
</style>