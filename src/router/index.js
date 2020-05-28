import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Creat',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  }, 
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/Task.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
