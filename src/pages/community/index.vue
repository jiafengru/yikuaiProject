<template>
	<view id="Box">
		<view class="search_warp">
			<view class="searchBox">
				<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_search.png" class="searchIcon"></image>
				<view class="search">搜索</view>
			</view>
		</view>
		<scroll-view class="content" scroll-y="true">
			<view class="myCommunity">
				<view class="titleName">
					<view class="title">
						<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/community.png"></image>
						我的社区
					</view>
					<view class="lookMore">查看全部 ></view>
				</view>
				<scroll-view class="communityList" scroll-x enable-flex="true">
					<view class="item">
						<image src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
						<view class="classify">美食</view>
						<view class="count">0000条更新</view>
					</view>
					<view class="item">
						<image src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
						<view class="classify">美食</view>
						<view class="count">0000条更新</view>
					</view>
					<view class="item">
						<image src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
						<view class="classify">美食</view>
						<view class="count">0000条更新</view>
					</view>
					<view class="item">
						<image src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
						<view class="classify">美食</view>
						<view class="count">0000条更新</view>
					</view>
					<view class="item">
						<image src="https://images.hylpz.cn/data/images/common/index/banner2_kouzhao.png"></image>
						<view class="classify">美食</view>
						<view class="count">0000条更新</view>
					</view>
					<view class="holder"></view>
				</scroll-view>
			</view>
			<view class="topicList">
				<view class="topicModule">
					<view class="titleName">
						<view class="title">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/topic.png"></image>
							好物话题精选
						</view>
						<view class="lookMore">所有话题 ></view>
					</view>
					<view class="module">
						<view class="list">
							<view class="left">
								<view class="topicName"> 
									<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_topic.png"></image>
									你用过最好的洗发水
								</view>
								<view class="topicFrom">来自社区：“XXXXXX”</view>
							</view>
							<view class="right">
								<view class="imgBox">
									<image src="https://images.hylpz.cn/data/images/common/chathead/5.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/24.jpg"></image>
								</view>
								<view class="participate">已有123456人参与话题</view>
							</view>
						</view>
						<view class="list">
							<view class="left">
								<view class="topicName"> 
									<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_topic.png"></image>
									你用过最好的洗发水
								</view>
								<view class="topicFrom">来自社区：“XXXXXX”</view>
							</view>
							<view class="right">
								<view class="imgBox">
									<image src="https://images.hylpz.cn/data/images/common/chathead/5.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/24.jpg"></image>
								</view>
								<view class="participate">已有123456人参与话题</view>
							</view>
						</view>
						<view class="list">
							<view class="left">
								<view class="topicName"> 
									<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_topic.png"></image>
									你用过最好的洗发水
								</view>
								<view class="topicFrom">来自社区：“XXXXXX”</view>
							</view>
							<view class="right">
								<view class="imgBox">
									<image src="https://images.hylpz.cn/data/images/common/chathead/5.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/24.jpg"></image>
								</view>
								<view class="participate">已有123456人参与话题</view>
							</view>
						</view>
					</view>
				</view>
				<view class="topicModule">
					<view class="titleName">
						<view class="title">
							<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/topic.png"></image>
							雷品话题精选
						</view>
						<view class="lookMore">所有话题 ></view>
					</view>
					<view class="module">
						<view class="list">
							<view class="left">
								<view class="topicName">
									<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_topic.png"></image>
									你用过最差的洗发水
								</view>
								<view class="topicFrom">来自社区：“XXXXXX”</view>
							</view>
							<view class="right">
								<view class="imgBox">
									<image src="https://images.hylpz.cn/data/images/common/chathead/5.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/24.jpg"></image>
								</view>
								<view class="participate">已有123456人参与话题</view>
							</view>
						</view>
						<view class="list">
							<view class="left">
								<view class="topicName">
									<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_topic.png"></image>
									你用过最差的洗发水
								</view>
								<view class="topicFrom">来自社区：“XXXXXX”</view>
							</view>
							<view class="right">
								<view class="imgBox">
									<image src="https://images.hylpz.cn/data/images/common/chathead/5.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/24.jpg"></image>
								</view>
								<view class="participate">已有123456人参与话题</view>
							</view>
						</view>
						<view class="list">
							<view class="left">
								<view class="topicName">
									<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_topic.png"></image>
									你用过最差的洗发水
								</view>
								<view class="topicFrom">来自社区：“XXXXXX”</view>
							</view>
							<view class="right">
								<view class="imgBox">
									<image src="https://images.hylpz.cn/data/images/common/chathead/5.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
									<image src="https://images.hylpz.cn/data/images/common/chathead/24.jpg"></image>
								</view>
								<view class="participate">已有123456人参与话题</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="togetherCommunity">
				<view class="titleName">
					<view class="title">
						<image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/community.png"></image>
						一块社区
					</view>
					<view class="lookMore">所有社区 ></view>
				</view>
				<view class="communityList">
					<view class="module">
						<view class="message">
							<view class="left">
								<view class="tit">我喜欢的精致生活</view>
								<view class="count">
									<text>12345个话题</text>
									<text>12345篇分享</text>
									<text>12345人加入</text>
								</view>
							</view>
							<view class="attentionStatus">
								<view class="attention">关注</view>
                            	<!-- <view class="attentionAble">已关注</view> -->
							</view>
						</view>
						<view class="imgList">
							<image src="https://images.hylpz.cn/data/images/banner/%E5%A1%91%E6%96%99%E4%BF%9D%E9%B2%9C%E7%9B%92KGC%E9%A6%96%E5%9B%BE.png"></image>
							<image src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
							<image src="https://images.hylpz.cn/data/images/banner/%E7%B2%BE%E5%8D%8E%E6%B6%B2.jpg"></image>
						</view>
					</view>
					<view class="module">
						<view class="message">
							<view class="left">
								<view class="tit">我喜欢的精致生活</view>
								<view class="count">
									<text>12345个话题</text>
									<text>12345篇分享</text>
									<text>12345人加入</text>
								</view>
							</view>
							<view class="attentionStatus">
								<!-- <view class="attention">关注</view> -->
                            	<view class="attentionAble">已关注</view>
							</view>
						</view>
						<view class="imgList">
							<image src="https://images.hylpz.cn/data/images/banner/%E5%A1%91%E6%96%99%E4%BF%9D%E9%B2%9C%E7%9B%92KGC%E9%A6%96%E5%9B%BE.png"></image>
							<image src="https://images.hylpz.cn/data/images/banner/%E7%B2%89%E6%89%91%281%29.png"></image>
							<image src="https://images.hylpz.cn/data/images/banner/%E7%B2%BE%E5%8D%8E%E6%B6%B2.jpg"></image>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
			this.setTabBarIndex(1);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "index.scss";
</style>
