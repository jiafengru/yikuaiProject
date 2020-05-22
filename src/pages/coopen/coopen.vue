<template>
    <view id="coopen">
        <image src="http://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/common/coopen.jpeg"></image>
    </view>
</template>

<script>
    var timeOut = setTimeout(function(){
        uni.switchTab({
            url: "../index/index"
        })
    }, 3000)
</script>

<style lang="scss" scoped>
    #coopen{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        image{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
</style>