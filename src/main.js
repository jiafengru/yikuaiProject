import Vue from 'vue'
import App from './App'
import request from './utils/request'
import globalData from './utils/globalData'

Vue.config.productionTip = false
Vue.prototype.request = request;
Vue.prototype.requestUrl = "http://49.233.210.178:9999/";

Vue.prototype.globalData = globalData; // 全局变量

Vue.mixin({
	methods:{
		setTabBarIndex(index){
			if (typeof this.$mp.page.getTabBar === 'function' &&
				this.$mp.page.getTabBar()) {
				this.$mp.page.getTabBar().setData({
					selected: index
				})
			}
		}
	}
})


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
