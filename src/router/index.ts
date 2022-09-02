import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
export const BASE_URL = 'record'
// 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: `/${BASE_URL}/`,
        component: import('@/pages/home/Index.vue'),
    },
    {
        path: `/${BASE_URL}/classification/:type`,
        component: import('@/pages/classification/Index.vue')
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {   
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: import('@/pages/404/Index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router