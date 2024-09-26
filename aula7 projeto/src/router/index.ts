import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import cart from '../views/CartView.vue'
import Build from '../views/BuildView.vue'
import NotFound from '../views/NotFoundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/Build',
      name: 'Build',
      component: Build
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },

  ]
})

export default router
