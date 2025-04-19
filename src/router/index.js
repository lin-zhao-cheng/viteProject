import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: () => import("@/views/Home.vue"),},
]


const router = createRouter({
  history: createWebHistory('/viteProject'), // ✅ 加上 base path
  routes,
})

export default router