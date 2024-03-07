import { createRouter, createWebHistory } from 'vue-router'
import Settings from '/src/views/Settings'
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
            path: '/settings',
            component: Settings,
            meta: {
                title: 'Settings - LogCenter'
            }
        },
    ]
})