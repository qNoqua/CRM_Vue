import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'empty', onlyAuth: false},
    component: () => import ('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty', onlyAuth: false},
    component: () => import ('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/Home.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/Categories.vue')
  },
  {
    path: '/detairecord',
    name: 'Detairecord',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/Detairecord.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main', onlyAuth: true},
    component: () => import ('@/views/Record.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthorized = JSON.parse(localStorage.getItem('isAuthorized'))
  if (to.meta.onlyAuth && !isAuthorized) {
      next({
          path: '/login',
          // query: { redirect: to.fullPath }
      })
  } else {
      next()
  }
});


export default router
