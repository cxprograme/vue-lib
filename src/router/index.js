import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home/Home';
import Cart from '@/components/cart/Cart'
import Explorer from '@/components/explorer/Explorer'
import Me from '@/components/me/Me'
import BookChapter from '@/components/bookchapter/BookChapter'
import ChapterList from '@/components/chapter_list/ChapterList'
import ChapContent from '@/components/chapcontent/ChapContent'
import BookDetail from '@/components/bookdetail/BookDetail'
import Login from '@/components/login/Login'
import CodeLogin from '@/components/code/CodeLogin'
import ConfirmBorrow from '@/components/confirm_borrow/ConfirmBorrow'
import Search from '@/components/search/Search'
import Want from '@/components/want/Want'
import AddWant from '@/components/want/add_want/AddWant'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    redirect:to=>{
      return '/hslib/home'
    }
  },
  // { name: 'Home', path: '/hslib/home', component: Home,
  //   children:[
  //     { name: 'chapters',path:'chapter',component:BookChapter}
  //   ]
  // },
  { name: 'Home', path: '/hslib/home', component: Home},
  { name: 'Cart', path: '/infoone/cart', component: Cart },
  { name: 'Explorer', path: '/infoone/explorer', component: Explorer},
  { name: 'Me', path: '/infoone/me', component: Me},
  { name: 'BookDetail',path: 'book/:id', component:BookDetail},
  { name: 'chapters',path:'/hslib/home/chapter',component:BookChapter},
  { name: 'chapterslist',path:'/hslib/home/chapter/list',component:ChapterList},
  { name: 'chapcontent',path:'/hslib/home/chapter/list/content',component:ChapContent},
  { name: 'login',path:'/hslib/lib/login',component:Login},
  { name: 'codeLogin',path:'/hslib/lib/code',component:CodeLogin},
  { name: 'confirm',path:'/hslib/lib/confirm',component:ConfirmBorrow},
  { name: 'search',path:'/hslib/lib/search',component:Search},
  { name: 'want',path:'/hslib/lib/want',component:Want},
  { name: 'addWant',path:'/hslib/lib/want/add',component:AddWant}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

router.push('/hslib/home')

export default router
