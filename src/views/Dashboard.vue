<template>
    <v-card elevation="4" class="ma-8 pa-8">
        <div style="width: 300px">
            <v-text-field v-model="search" density="compact" prepend-inner-icon="mdi-magnify" label="Search" single-line variant="outlined" hide-details></v-text-field>
        </div>

        <v-data-table density="compact" :search="search" :headers="headers" :items="logs" class="font-weight-light mt-4" items-per-page-text="Show">
            <template v-slot:item="{ item }">
                <tr :style="`background-color: ${getColor(item.type)};`">
                    <td class="py-2 px-4">{{ item.timestamp }}</td>
                    <td class="py-2 px-4">{{ item.message }}</td>
                    <td class="py-2 px-4" style="text-align: right;">{{ item.type }}</td>
                </tr>
            </template>

            <template v-slot:bottom>
                <v-pagination v-model="page" :length="pageCount" density="compact" class="mt-4"></v-pagination>
            </template>
        </v-data-table>
    </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()

const search = ref('')
const page = ref(1)
const itemsPerPage = 10
const pageCount = computed(() => {
    return Math.ceil(logs.length / itemsPerPage)
})

function getColor(type) {
    for (let logType of store.logTypes) {
        if (logType.name.toLowerCase() == type.toLowerCase()) {
            return logType.color
        }
    }
    return '#fff'
}

const headers = [
    {
        key: 'timestamp',
        title: 'Timestamp',
        minWidth: '180px'
    },
    {
        key: 'message',
        title: 'Message',
    },
    {
        key: 'type',
        title: 'Type',
        align: 'end',
    },
]

const logs = [
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'Success',
        message: 'this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good this is good',
    },
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'Error',
        message: 'this is not good',
    },
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'asdf',
        message: 'asdf',
    },
    {
        timestamp: '2/19/2024, 8:02:27 AM',
        type: 'Error',
        message: 'this is not good',
    },
]
</script>