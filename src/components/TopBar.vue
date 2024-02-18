<template>
    <div class="top-bar">
        <img class="logo" src="/src/assets/logo.png">
        <div class="logo">LogCenter</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .top-bar {
        display: flex;
        align-items: center;
        height: 50px;
        box-shadow: var(--shadow);
    }

    .logo {
        font-size: 24px;
    }

    img {
        height: 32px;
        width: 32px;
        padding: 9px;
    }
</style>