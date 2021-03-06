// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import storeConfig from './store/store'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueResource);
Vue.use(Vuex);
// const routes = [
//   { path: '/goods', component: goods },
//   { path: '/seller', component: seller },
//   {path: '/rating', component: rating}
// ];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   mode: 'history',
//   routes, // （缩写）相当于 routes: routes
//   linkActiveClass: 'active'
// });
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router: router,
  store:storeConfig,
  render: h => h(App),
  data: {
  	eventHub: new Vue()
  }
}).$mount('#app');


// router.push('/goods');
