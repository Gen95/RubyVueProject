<script setup>
import { ref, onMounted } from "vue"
import { createTask, getTasks } from "../api/tasks"
import { createCategory, getCategories } from "../api/categories"

const tasks = ref([]);
const newTaskTitle = ref("");

const categories = ref([]);

const loadTasks = async () => {
    tasks.value = await getTasks();
}

const createTaskHandler = async () => {
    if (!newTaskTitle?.value) return;
    await createTask(newTaskTitle.value)
    newTaskTitle.value = ""
    await loadTasks()
}

onMounted(async () => {
    await loadTasks();
    categories.value = await getCategories();
    console.log("CATEGORIES: ", categories.value)
})
</script>

<template>
    <input
        v-model="newTaskTitle"
        placeholder="Новая задача"
    />
    <button @click="createTaskHandler">Добавить</button>
    <div v-for="task in tasks" :key="task.id">
        {{ task.title }}: {{ task.completed ? 'Выполнено' : "В процессе" }}
    </div>
</template>

<style scoped>

</style>