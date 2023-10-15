import {createRouter, createWebHistory} from 'vue-router';
const routes:Array<any> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/layout/Home/index.vue")
    }
]
export default createRouter({
    history: createWebHistory(),
    routes
})