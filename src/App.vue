<template>
    <v-app>
        <TopBar></TopBar>
        <SideBar></SideBar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { useStore } from '/src/pinia'
const store = useStore()

document.title = store.title
// Update site title when page changes
watch(route, (newRoute) => {
    if (newRoute.meta.title) {
        document.title = newRoute.meta.title
    }
    else {
        document.title = store.title
    }
})
</script>

<style>
/* Removing default link styling */
a {
    color: inherit;
    text-decoration: inherit;
}
</style>