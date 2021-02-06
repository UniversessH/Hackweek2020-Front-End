import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Layout from '@/views/layout/index.vue'
import Test from '@/views/main/test.vue'
import Square from '@/views/main/square.vue'
import Follow from '@/views/main/follow.vue'
import backStage from '@/views/backStage/backStage.vue'
import register from '@/views/register/register.vue'
import Eat from '@/views/eat/eat.vue'
import Publish from '@/views/publish/publish.vue'
import List from '@/views/list/list.vue'
import My from '@/views/my/my.vue'
import Setting from '@/views/setting/setting.vue'
import aboutUs from '@/views/aboutUs/aboutUs.vue'
//import { toPrecision } from 'core-js/fn/number/epsilon'
//import { nextTick } from 'vue/types/umd'
//import { toPrecision } from 'core-js/fn/number/epsilon'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '', // 默认子路由渲染
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/square',
    name: 'square',
    component: Square
  },
  {
    path: '/follow',
    name: 'follow',
    component: Follow
  },
  {
    path: '/admin',
    name: 'admin',
    component: backStage
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/eat',
    name: 'eat',
    component: Eat
  },
  {
    path: '/publish',
    name: 'publish',
    component: Publish
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path:'/aboutus',
    name: 'aboutus',
    component: aboutUs
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login'){
    next();
  } else {
    let token
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");
    for ( let i = 0; i<arrCookie.length; i++){
      let arr = arrCookie[i].split("=");
      if (arr[0] === "token"){
        token = arr[1];
      }
    }
    if (token === null || token === '' ){
      next('/login');
    }else{
      next();
    }
  }
})
export default router

