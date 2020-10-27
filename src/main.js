import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Element from 'element-ui'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: 'medium', // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
