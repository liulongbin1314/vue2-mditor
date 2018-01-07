import Vue from 'vue'

// 导入测试的根组件
import App from './App.vue'

new Vue({
  el: '#app',
  render: c => c(App)
})