<template>
    <v-app>
        <TopBar></TopBar>
        <SideBar v-if="route.path == '/'"></SideBar>
        <v-main>
            <RouterView></RouterView>
        </v-main>
    </v-app>
</template>

<script setup>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import { watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
const route = useRoute()

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