import { createRouter, createWebHistory } from 'vue-router'
import CreateView from '../views/CreateView.vue'
import PasteView from '../views/PasteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CreateView
    },
    {
      path: '/:id',
      component: PasteView
    }
  ]
})

export default router
