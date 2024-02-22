<template>
    <div class="logs">
        <Dropdown label="Type" :default="filterType" :options="logTypes"></Dropdown>
        
        <div v-for="log in logs" v-bind:key="log" class="log" :style="`background-color: ${getColor(log.type)}; color: ${getText(log.type)};`">
            <div>{{ log.type }}</div>
            <div>{{ log.message }}</div>
            <div>{{ log.timestamp }}</div>
        </div>

        <div style="text-align: right;">
            <Dropdown label="Show" :default="showNumber" :options="numbers"></Dropdown>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
import tinycolor from "tinycolor2";
import Dropdown from '/src/components/Dropdown'

const showNumber = ref('10')
const numbers = [
    10,
    25,
    50,
    100
]

const filterType = ref('All')
const logTypes = computed(() => {
    let types = ['All']
    for (let logType of store.logTypes) {
        types.push(logType.type)
    }
    return types
})

function getColor(type) {
    for (let logType of store.logTypes) {
        if (logType.type == type) {
            return logType.color
        }
    }
    return store.defaultColor
}

function getText(type) {
    let color = tinycolor(getColor(type))
    if (color.getBrightness() < 128) {
        return ('#ffffff')
    }
    else {
        return '#000000'
    }
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
label {
    margin-bottom: 24px;
    margin-right: 24px;
    display: inline-block;
}

.logs {
    margin: 24px;
    padding: 24px;
    box-shadow: var(--shadow);
    border-radius: 5px;
}

.log {
    border-radius: 5px;
    margin: 5px 0px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
</style>