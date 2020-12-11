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
  }
]

const router = new VueRouter({
  routes
})

export default router
