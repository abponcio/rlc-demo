import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Index.vue';
import NotFound from '@/layouts/NotFound.vue';
import Error from '@/layouts/Error.vue';

const routes = [
  {
    path: '/',
    name: HomePage.name,
    component: HomePage,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});