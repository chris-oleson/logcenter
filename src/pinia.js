import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        title: '',
        logTypes: [
            {
                name: 'success',
                color: '#38ff6d'
            },
            {
                name: 'error',
                color: '#ff4f4f'
            },
        ],
        views: [
            {
                name: 'My App',
                path: '/my-app',
                icon: 'mdi-application'
            }
        ]
    }),

    actions: {

    },

    persist: true
})