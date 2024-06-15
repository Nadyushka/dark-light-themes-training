import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import { MainLayout } from "@/pages";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'user-card',
        components: {
            default: MainLayout,
        },
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
