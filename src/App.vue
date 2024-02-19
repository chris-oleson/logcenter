<template>
    <TopBar></TopBar>
    <RouterView></RouterView>
</template>

<script setup>
    import TopBar from './components/TopBar'
    import { watch } from 'vue'
    import { useRoute, RouterView } from 'vue-router'
    const route = useRoute()

    // Update site title when page changes
    watch(route, (newRoute) => {
        document.title = newRoute.meta.title
    })
</script>

<style>
:root {
    --primary-color: #336abc;
    --background-color: #fff;
    --shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    --log-default: (128, 128, 128)
}

body {
    font-family: roboto;
    font-weight: 300;
    background-color: var(--background-color);
}

h1 {
    font-size: 32px;
}

h2 {
    font-size: 24px
}

a {
    color: inherit;
    text-decoration: inherit;
}

.button {
    background-color: var(--primary-color);
    padding: 10px;
    color: var(--background-color);
    display: inline-block;
    transition-duration: 200ms;
    box-shadow: var(--shadow);
}
.button:hover {
    filter: brightness(1.15);
}

p {
    margin: 24px;
}
</style>