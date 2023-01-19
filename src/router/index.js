import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../views/contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component:  contact
    },
  ]
})

export default router
