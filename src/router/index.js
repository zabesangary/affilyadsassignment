import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exit',
    name: 'exit',
    // route level code-splitting
    // this generates a separate chunk (exit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "exit" */ '../views/exit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
