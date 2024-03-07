import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        logTypes: [],
        views: []
    }),

    actions: {

    },

    persist: true
})