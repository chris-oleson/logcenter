<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-8 text-center">
                    <div>Log Types</div>
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
                                <td>
                                    <v-text-field :model-value="logType.name" variant="outlined" density="compact" hide-details @change="logType.name = $event.target.value"/>
                                </td>
                                <td width="100px">
                                    <input type="color" :value="logType.color" @change="logType.color = $event.target.value"/>
                                </td>
                                <td width="50px">
                                    <v-btn class="ma-2" @click="store.logTypes.splice(store.logTypes.indexOf(logType), 1)" icon="mdi-minus" size="small" variant="tonal"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="pa-8 text-center">
                    <div>Views</div>
                    <v-table>
                        <thead>
                            <th>View</th>
                            <th>Icon</th>
                            <th>
                                <v-btn class="ma-2" @click="store.views.push({name: '', icon: ''})" icon="mdi-plus" size="small" variant="tonal"></v-btn>
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="view in store.views" :key="view.name">
                                <td>
                                    <v-text-field :model-value="view.name" variant="outlined" density="compact" hide-details @change="view.name = $event.target.value"/>
                                </td>
                                <td>
                                    <v-text-field :model-value="view.icon" variant="outlined" density="compact" hide-details @change="view.icon = $event.target.value"/>
                                </td>
                                <td width="50px">
                                    <v-btn class="ma-2" @click="store.views.splice(store.views.indexOf(view), 1)" icon="mdi-minus" size="small" variant="tonal"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useStore } from '/src/pinia'
const store = useStore()
</script>