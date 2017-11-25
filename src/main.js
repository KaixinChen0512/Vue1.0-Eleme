// 主程序入口文件，加载各种公共组件
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
// 这里的App就是上面import进来的App.vue组件
// 通过Vue.extend生成一个根组件
let app = Vue.extend(App);
// 实例化一个Vuerouter
let router = new VueRouter({
  linkActiveClass: 'active'
});
// 定义Vuerouter
// 使用map方法定义path中路径与组件的对应关系
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
// 路由创建一个App实例，并挂载到index.html中与标签'#app'匹配的元素上
router.start(app, '#app');
