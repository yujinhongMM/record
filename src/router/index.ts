import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from '@/pages/home/Index.vue';
import Home from '@/pages/home/Index.vue';
import Classification from '@/pages/classification/Index.vue';
// 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/classification/:type',
        component: Classification
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router