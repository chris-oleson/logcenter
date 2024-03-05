<template>
    <v-card class="pa-10 mx-auto ma-10 text-center" width="500">
        <v-table>
            <thead>
                <th>Type</th>
                <th>Color</th>
                <th>
                    <v-btn class="ma-2" @click="store.logTypes.push({type: '', color: '#ffffff'})" icon="mdi-plus" size="small" variant="tonal"></v-btn>
                </th>
            </thead>
            <tbody>
                <tr v-for="logType in store.logTypes" :key="logType.name">
                    <td><v-text-field :model-value="logType.name" variant="outlined" density="compact" hide-details @change="logType.name = $event.target.value"/></td>
                    <td><input type="color" :value="logType.color" @change="logType.color = $event.target.value"/></td>
                    <td><v-btn class="ma-2" @click="store.logTypes.splice(store.logTypes.indexOf(logType), 1)" icon="mdi-minus" size="small" variant="tonal"></v-btn></td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<script setup>
import { useStore } from '/src/pinia'
const store = useStore()
</script>

<style scoped>

</style>