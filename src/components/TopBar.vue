<template>
    <v-app-bar>
        <router-link class="d-inline-flex align-center mx-4" to="/">
            <img src="/src/assets/logo.png" height="36" width="36" alt="LogCenter logo"/>
            <h2 class="font-weight-light ml-2">LogCenter</h2>
        </router-link>
        <v-card class="font-weight-light text-error px-2" variant="outlined">alpha</v-card>

        <v-spacer/>

        <!-- Dashboard menu -->
        <v-menu offset-y close-on-click transition="slide-y-transition" nudge-bottom='24'>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-account" class="mx-2" variant="plain" v-bind="props"/>
            </template>
            <v-list class="font-weight-light pa-0" width="200">
                <v-list-item prepend-icon="mdi-cog" to="/settings">Settings</v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script setup>

</script>