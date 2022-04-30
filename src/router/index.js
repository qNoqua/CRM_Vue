import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'empty'},
    component: () => import ('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import ('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import ('@/views/Home.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () => import ('@/views/Categories.vue')
  },
  {
    path: '/detairecord',
    name: 'Detairecord',
    meta: {layout: 'main'},
    component: () => import ('@/views/Detairecord.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'main'},
    component: () => import ('@/views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'main'},
    component: () => import ('@/views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: () => import ('@/views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main'},
    component: () => import ('@/views/Record.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
