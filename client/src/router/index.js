import { createRouter, createWebHistory } from 'vue-router'
import MyBooks from '../views/MyBooks.vue'
import MyWishlist from '../views/MyWishlist.vue'

const routes = [
  {
    path: '/',
    name: 'MyBooks',
    component: MyBooks
  },
  {
    path: '/wishlist',
    name: 'MyWishlist',
    component: MyWishlist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
