import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: () => import("@/views/Home.vue"),},
  { path: '/DrawFortune', name: 'DrawFortune', component: () => import("@/views/DrawFortune.vue"),},
  
]


const router = createRouter({
  history: createWebHashHistory('/viteProject'), // ✅ 加上 base path
  routes,
})

export default router