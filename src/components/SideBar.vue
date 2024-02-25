<template>
    <v-navigation-drawer permanent floating :rail="mobile" elevation="4">
        <v-list class="font-weight-light pa-0" :value="page">
            <v-list-item replace slim prepend-icon="mdi-view-dashboard" class="py-4" to="/dashboard">Dashboard</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>

</script>