import VueRouter from 'vue-router'

import Goods from '../components/content/Goods.vue'
import Ratings from '../components/content/Ratings.vue'
import Seller from '../components/content/Seller.vue'

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
    path: '/seller',
    component: Seller
  }
]

const router = new VueRouter({
  // 活动的连接class名称修改为active
  linkActiveClass: 'active',
  routes
})

export default router