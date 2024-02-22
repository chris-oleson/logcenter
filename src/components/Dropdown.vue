<template>
    <div class="dropdown">
        <div class="select" @click.stop="show = !show">{{ selected }}
            <img src="/src/assets/menu-down.svg" style="width:24px; height:24px"/>
        </div>
        <div class="options" :class="{show: show}">
            <div v-for="option in options" v-bind:key="option" class="option" @click="selected = option;">{{ option }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps([
    'options',
    'default',
])

const selected = ref(props.default)
const show = ref(false)

onBeforeUnmount(() => {
    document.removeEventListener('click', hideDropdown)
})

onMounted(() => {
    document.addEventListener('click', hideDropdown)
})

function hideDropdown() {
    show.value = false;
}
</script>

<style scoped>
.dropdown {
    position: relative;
}

.select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eeeeee;
    padding: 5px;
    padding-left: 10px;
}

.options {
    background-color: white;
    border: 1px solid #eeeeee;
    position: absolute;
    left: 0;
    right: 0;
    transition: .3s ease-out;
    transform-origin: top;
    transform: scale(1, 0);
    opacity: 0;
    z-index: 1000;
}
.show {
    transform: scale(1, 1);
    opacity: 1;
}

.option {
    padding: 5px;
}
.option:hover {
    background-color: #eeeeee;
}
</style>