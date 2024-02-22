<template>
    <div>
        <button @click="store.logTypes.push({type: '', color: '#ffffff'})">+</button>
        <div v-for="logType of store.logTypes" v-bind:key="logType">
            <input :value="logType.type" @change="logType.type = $event.target.value"/>
            <input type="color" :value="logType.color" @change="logType.color = $event.target.value"/>
            <button @click="store.logTypes.splice(store.logTypes.indexOf(logType), 1)">-</button>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '/src/pinia'
const store = useStore()
</script>

<style scoped>

</style>