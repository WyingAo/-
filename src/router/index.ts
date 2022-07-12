import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:()=>import('@/views/layout/index.vue')
        },
        {
            path:'/login',
            component:()=>import('@/views/login/index.vue')
        }
]
})
export default router