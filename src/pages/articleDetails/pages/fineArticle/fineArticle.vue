<template>
    <view id="Box">
        <scroll-view id="content" scroll-y>
            <view class="personInfo">
                <view class="message">
                    <image class="headUrl" src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
                    <view class="userInfo">
                        <view class="nickName">昵称</view>
                        <view class="ps">个性签名</view>
                    </view>
                </view>
                <view class="operation">
                    <view class="attentionBox">
                        <view class="attention">关注</view>
                        <!-- <view class="attentionAble">已关注</view> -->
                    </view>
                    <view class="more">
                        <view></view>
                        <view></view>
                        <view></view>
                    </view>
                </view>
            </view>
            <view class="artImgBox">
                <swiper class="artImgList" @change="swiperChange">
                    <swiper-item class="listItem" v-for="(item,index) of artImgList" :key="index">
                        <view class="contanier">
                            <image mode="widthFix" :src="item"></image>
                        </view>
                    </swiper-item>
                </swiper>
                <view class="count">{{artImgIndex}}/{{artImgList.length}}</view>
                <view class="swiperDots">
                    <view :class="{dots: true, dotsActive: (artImgIndex - 1) == index}" v-for="(item,index) of artImgList" :key="index"></view>
                </view>
            </view>
            <view class="artContent">
                <view class="title">文章标题</view>
                <view class="paragraph">每年这个季节蚊子就一只两只的出现，宝宝的皮肤特别招蚊子，一盯上就是一个很大的包，然后就不停的抓，不停的挠，最后就是惨不忍睹的皮肤，还会发炎，真的很受罪，所以我每年都会提前备好驱蚊防蚊的用品～</view>
                <view class="paragraph">今年我第一个备的就是朋友推荐我的润本驱蚊贴，一拿到手就觉得哇塞，包装都这么可爱，一盒里面有三小包，每包里面有两张，每张有6个贴，也就是一盒有36个贴，而且每包里面的图案也是不一样的，驱蚊贴面积比之前买的都大一些，效果也会更持久一点，它是用纯植物制作小孩子用非常安全，而且味道也特别好闻，妈妈们可以放心使用～</view>
            </view>
            <!-- 话题 -->
            <view class="topicBox">
                <view class="topicList">
                    <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/topic.png"></image>
                    <view class="name">话题名称</view>
                </view>
                <view class="topicList">
                    <image src="https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/topic.png"></image>
                    <view class="name">话题名称</view>
                </view>
            </view>
            <!-- time -->
            <view class="time">03-15</view>
            <!-- 评论 -->
            <view class="commentBox">
                <view class="commentCount">共12345条评论</view>
                <view class="commentModule">
                    <view class="module">
                        <image class="headUrl" src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
                        <view class="moduleMsg">
                            <view class="msgTop">
                                <view class="left">
                                    <view class="userName">用户昵称</view>
                                    <view class="lineTxt">这东西好不好？？？这东西好不好？？？这东西好不好？？？</view>
                                </view>
                                <view class="right">
                                    <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/dianzan.png"></image>
                                    <view class="number">123</view>
                                </view>
                            </view>
                            <view class="reply">
                                <view class="replyTxt"><text>用户B：</text>这东西好不好？？？</view>
                                <view class="replyTxt"><text>用户A：</text>这东西好不好？？？</view>
                                <view class="replyTxt1">查看全部1234条评论 ></view>
                            </view>
                        </view>
                    </view>
                    <view class="module">
                        <image class="headUrl" src="https://images.hylpz.cn/data/images/common/chathead/19.jpg"></image>
                        <view class="moduleMsg">
                            <view class="msgTop">
                                <view class="left">
                                    <view class="userName">用户昵称</view>
                                    <view class="lineTxt">这东西好不好？？？这东西好不好？？？这东西好不好？？？</view>
                                </view>
                                <view class="right">
                                    <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/dianzan.png"></image>
                                    <view class="number">123</view>
                                </view>
                            </view>
                            <view class="reply">
                                <view class="replyTxt"><text>用户B：</text>这东西好不好？？？</view>
                                <view class="replyTxt"><text>用户A：</text>这东西好不好？？？</view>
                                <view class="replyTxt1">查看全部1234条评论 ></view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
        
        <view id="footer">
            <view class="inputBox">
                <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/Icon_edit.png"></image>
                <input type="text" placeholder="说说我的看法…">
            </view>
            <view class="collectBox">
                <view class="collectItem">
                    <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/collect.png"></image>
                    <view class="number">123</view>
                </view>
                <view class="collectItem">
                    <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/dianzan.png"></image>
                    <view class="number">123</view>
                </view>
                <view class="collectItem">
                    <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/comment.png"></image>
                    <view class="number">123</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
		data() {
			return {
				artImgList: [
                    "https://images.hylpz.cn/data/images/common/index/banner1.png",
                    "https://images.hylpz.cn/data/images/banner/%E5%8D%B8%E5%A6%86%E6%B0%B4%285%29%281%29.png",
                    "https://images.hylpz.cn/data/images/common/index/electricAppliance.png",
                ],
                artImgIndex: 1
			}
		},
		methods: {
			swiperChange(e){
				var index = (e.detail.current + 1);
				this.artImgIndex = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "fineArticle.scss";
</style>
