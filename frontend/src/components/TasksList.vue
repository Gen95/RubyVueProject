<script setup>
import { ref, onMounted } from "vue"
import { getTasks } from "../api/tasks"

const tasks = ref([])

onMounted(async () => {
    tasks.value = await getTasks();
})
</script>

<template>
    <div v-for="task in tasks" :key="task.id">
        {{ task.title }}: {{ task.completed ? 'Выполнено' : "В процессе" }}
    </div>
</template>

<style scoped>

</style>