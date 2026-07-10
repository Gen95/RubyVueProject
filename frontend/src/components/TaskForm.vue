<script setup>
import { ref, onMounted } from "vue"
import { createTask, getTasks } from "../api/tasks"
import { createCategory, getCategories } from "../api/categories"

const newTaskTitle = ref("");
const emit = defineEmits(['create-task'])

const createTaskHandler = async () => {
    if (!newTaskTitle?.value) return;
    emit('create-task', newTaskTitle.value)
    newTaskTitle.value = ""
}
</script>

<template>
    <input
        v-model="newTaskTitle"
        placeholder="Новая задача"
    />
    <button @click="createTaskHandler">Добавить</button>
</template>
