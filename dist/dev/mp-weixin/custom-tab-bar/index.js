Component({
	data: {
		selected: 0,
		color: "#6D7278",
		selectedColor: "#2C2C2C",
		"list": [
            {
                "pagePath": "/pages/index/index",
                "text": "广场",
                "iconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/home.png",
                "selectedIconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/home_hl.png",
            },
            {
                "pagePath": "/pages/community/index",
                "text": "社区",
                "iconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/community.png",
                "selectedIconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/community_hl.png",
            },
            {
                "iconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/publish.png",
                "selectedIconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/publish.png",
            },
            {
                "pagePath": "/pages/news/index",
                "text": "消息",
                "iconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/message.png",
                "selectedIconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/message_hl.png",
            },
            {
                "pagePath": "/pages/personal/index",
                "text": "我的",
                "iconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/personal.png",
                "selectedIconPath": "https://cyahua.oss-cn-beijing.aliyuncs.com/yikuai/tabbar/personal_hl.png",
            }
        ]
	},
	attached() {

	},
    methods: {
      	switchTab(e) {
			const data = e.currentTarget.dataset;
            const url = data.path;

			wx.switchTab({url})
			// this.setData({
			// 	selected: data.index,
			// })
      	}
    }
})