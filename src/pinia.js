import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        defaultColor: '#c4c4c4',
        logTypes: [],
        views: [
            {
                name: 'Dashboard',
                path: '/',
                icon: 'mdi-view-dashboard'
            }
        ]
    }),

    actions: {

    },
})