import { createRouter,createWebHistory } from 'vue-router'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/button',
        name: 'Button',
        component: () => import('../views/Button.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router