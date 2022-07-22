import Vue from 'vue'
import VueRouter from 'vue-router'
import dashBoard from '../views/dashBoard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: dashBoard
  }
]

const router = new VueRouter({
  routes
})

export default router