import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List'
import Task from '../views/Task'

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
    component: List
  }, 
  {
    path: '/post/:id',
    name: 'Post',
    component: Task
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
