<template>
    <v-navigation-drawer permanent floating elevation="4">
        <v-list class="font-weight-light pa-0">
            <v-list-item v-for="view in store.views" v-bind:key="view.name" replace slim :prepend-icon="view.icon" class="py-4" :to="'/view/' + view.name.toLowerCase().replace(' ', '-')" @click="store.title = view.name + ' - LogCenter'">{{ view.name }}</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { useStore } from '/src/pinia'
const store = useStore()
</script>