<template>
    <button @click="logTypes.push({})">+</button>
    <div v-for="logType of store.logTypes">
        <input :value="logType.type" @change="logType.type = $event.target.value"/>
        <input type="color" :value="logType.color" @change="logType.color = $event.target.value"/>
        <button @click="logTypes.splice(logTypes.indexOf(logType), 1)">-</button>
    </div>

    <div class="logs">
        <div v-for="log in logs" class="log" :style="'background-color: ' + getColor(log.type)">
            <div>{{ log.type }}</div>
            <div>{{ log.message }}</div>
            <div>{{ log.timestamp }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()

function getColor(type) {
    for (let logType of store.logTypes) {
        if (logType.type == type) {
            return logType.color
        }
    }
    return store.defaultColor
}

const logs = [
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'success',
        message: 'this is good',
    },
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'error',
        message: 'this is not good',
    },
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'asdf',
        message: 'asdf',
    },
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'error',
        message: 'this is not good',
    },
]
</script>

<style scoped>
    .logs {
        margin: 24px;
    }

    .log {
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        box-shadow: var(--shadow);
    }
</style>