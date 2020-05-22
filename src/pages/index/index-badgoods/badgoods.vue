<template>
    <scroll-view class="content" scroll-y="true" @scroll="scrollPage" lower-threshold="120" @scrolltolower="scrolltolower">
        <view class="section">
            <view class="left">
                <view class="module" v-for="(item,index) of dataList" :key="index" v-if="index % 2 == 0">
                    <view class="center">
                        <view class="imgBox">
                            <easy-loadimage mode="widthFix" :scroll-top="scrollTop" :image-src="item.coverUrl" loading-mode="skeleton-1"></easy-loadimage>
                        </view>
                        <view class="voteResult">
                            <view class="endorse">赞同</view>
                            <view class="noEndorse">不赞同</view>
                        </view>
                    </view>
                    <view class="title">{{item.title}}</view>
                    <view class="message">
                        <view class="personalMsg">
                            <image :src="item.avatar"></image>
                            <view class="nickName">{{item.nickName}}</view>
                        </view>
                        <view class="browsing">
                            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
                            <view class="count">{{item.visitNum}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="right">
                <view class="module" v-for="(item,index) of dataList" :key="index" v-if="index % 2 == 1">
                    <view class="center">
                        <view class="imgBox">
                            <easy-loadimage mode="widthFix" :scroll-top="scrollTop" :image-src="item.coverUrl" loading-mode="skeleton-1"></easy-loadimage>
                        </view>
                        <view class="voteResult">
                            <view class="endorse">赞同</view>
                            <view class="noEndorse">不赞同</view>
                        </view>
                    </view>
                    <view class="title">{{item.title}}</view>
                    <view class="message">
                        <view class="personalMsg">
                            <image :src="item.avatar"></image>
                            <view class="nickName">{{item.nickName}}</view>
                        </view>
                        <view class="browsing">
                            <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_eye.png"></image>
                            <view class="count">{{item.visitNum}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <authorization></authorization>
        </view>
    </scroll-view>
</template>

<script>
    var listPage = 1;
    import easyLoadimage from "@/components/easy-loadimage/easy-loadimage.vue";
    import authorization from "@/components/authorization/authorization.vue";
    export default {
		data() {
			return {
                categoryId: 0, // 品类ID
                scrollTop: 0,
				dataList: [],
			}
		},
		components: {
            easyLoadimage,
            authorization,
        },
        mounted () {
            this.getData();
        },
		methods: {
			getData(){
                this.request({
                    url: this.requestUrl + "square/article/brief/list?",
                    data: {
                        type: 1,
                        categoryId: this.categoryId,
                        page: listPage,
                        pageSize: 10
                    },
                }).then(result=>{
                    this.dataList = [...this.dataList, ...result.data]
                })
            },
			scrollPage(e) {
                // 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
                this.scrollTop = e.detail.scrollTop;
            },
            // 下拉加载更多
            scrolltolower(){
                listPage = listPage + 1;
                this.getData();
            }
		}
	}
</script>

<style lang="scss" scoped>
	@import "badgoods.scss";
</style>