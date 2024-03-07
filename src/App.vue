<template>
    <v-app>
        <TopBar></TopBar>
        <SideBar></SideBar>
        <v-main>
            <RouterView></RouterView>
        </v-main>
    </v-app>
</template>

<script setup>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Dashboard from '/src/views/Dashboard'
import { watch } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { useStore } from '/src/pinia'
const store = useStore()

for (let view of store.views) {
    router.addRoute({
        path: view.path,
        component: Dashboard,
        props: { name: view.name },
        meta: {
            title: view.name + ' - LogCenter'
        }
    })
}
console.log(router.getRoutes())

// Update site title when page changes
watch(route, (newRoute) => {
    document.title = newRoute.meta.title
})
</script>

<style>
/* Removing default link styling */
a {
    color: inherit;
    text-decoration: inherit;
}
</style>