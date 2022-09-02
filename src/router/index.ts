import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound  from '@/pages/404/Index.vue';
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
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {   
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router