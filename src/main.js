// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
import VueI18n from 'vue-i18n'
Vue.use(ElementUI);
Vue.use(VueI18n) // 通过插件的形式挂载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 2,
  error: '../static/images/loading.gif',
  loading: '../static/images/loading.gif',
  attempt: 1
})

const i18n = new VueI18n({
  locale: 'KR',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'KR': require('./common/lang/kr'),   // 韩文语言包
    'CN': require('./common/lang/cn'),   // 中文语言包
    'EN': require('./common/lang/en'),   // 英文语言包
  }
})
console.log(i18n)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  // 不要忘记
  router,
  components: { App },
  template: '<App/>'
})
