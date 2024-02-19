import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        defaultColor: '#c4c4c4',
        logTypes: [
            {
                type: 'success',
                color: '#acffa8'
            },
            {
                type: 'error',
                color: '#ffc2c2'
            },
        ]
    }),

    actions: {

    },
    persist: true,
})