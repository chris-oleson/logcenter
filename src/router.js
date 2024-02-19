import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '/src/views/Dashboard'
import PageNotFound from '/src/views/PageNotFound'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/404',
            alias: '/:pathMatch(.*)*',
            component: PageNotFound,
            meta: {
                title: '404 - LogCenter'
            }
        },
        {
            path: '/',
            component: Dashboard,
            meta: {
                title: 'Dashboard - LogCenter'
            }
        },
    ]
})