<template>
    <div class="top-bar">
        <router-link class="logo" to="/">
            <img src="/src/assets/logo.png">
            <h2>LogCenter</h2>
        </router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .top-bar {
        height: 7vh;
        box-shadow: var(--shadow);
    }

    .logo {
        display: inline-flex;
        align-items: center;
    }

    img {
        height: 32px;
        width: 32px;
        padding: 9px;
    }
</style>