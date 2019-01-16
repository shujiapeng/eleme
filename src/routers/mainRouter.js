import VueRouter from 'vue-router'

import Goods from '../components/content/Goods.vue'
import Ratings from '../components/content/Ratings.vue'
import Sellers from '../components/content/Sellers.vue'

const routes = [
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/sellers',
    component: Sellers
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router