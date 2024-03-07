<template>
    <v-navigation-drawer permanent floating elevation="4">
        <v-list class="font-weight-light pa-0" :value="page">
            <v-list-item v-for="view in store.views" v-bind:key="view.name" replace slim :prepend-icon="view.icon" class="py-4" :to="view.path">{{ view.name }}</v-list-item>
            <v-list-item replace slim prepend-icon="mdi-plus" class="py-4" @click="newView()">New View</v-list-item>
            <v-dialog v-model="dialog" max-width="400px">
                <v-card class="pa-10 text-center mx-auto" width="330">
                    <v-card-title class="font-weight-light text-center">New View</v-card-title>
                    <v-text-field v-model="editView.name" variant="underlined" label="Name" class="pb-4"></v-text-field>
                    <v-text-field v-model="editView.icon" variant="underlined" label="Icon" class="pb-4"></v-text-field>
                    <v-btn width="200" class="mx-auto bg-primary mt-4" @click="addView">Save</v-btn>
                    <v-btn width="200" class="mx-auto font-weight-light" variant="plain" @click="dialog = false">Cancel</v-btn>
                </v-card>
            </v-dialog>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import Dashboard from '/src/views/Dashboard'
import { useStore } from '/src/pinia'
const store = useStore()

const dialog = ref(false)
const defaultView = {
    name: '',
    path: '',
    icon: ''
}
const editView = ref({
    name: '',
    path: '',
    icon: ''
})

const page = computed(() => {
    return route.path.substring(1)
})

function newView() {
    editView.value = Object.assign(defaultView)
    dialog.value = true
}

function addView() {
    router.addRoute({
        path: '/' + store.views.length,
        component: Dashboard,
        meta: {
            title: editView.value.name + ' - LogCenter'
        }
    })
    store.views.push({
        name: editView.value.name,
        path: '/' + store.views.length,
        icon: editView.value.icon
    })
    dialog.value = false
}
</script>