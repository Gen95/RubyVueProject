<script setup>
import { ref, onMounted } from "vue"
import { createTask, getTasks } from "./api/tasks"
import { createCategory, getCategories } from "./api/categories"
import { CategoryForm, CategoriesList, TaskForm, TasksList } from './components';

const tasks = ref([]);
const categories = ref([]);

const loadTasks = async () => {
    tasks.value = await getTasks();
}
const loadCategories = async () => {
    categories.value = await getCategories();
}

const createTaskHandler = async (task) => {
    await createTask(task)
    await loadTasks()
}
const createCategoryHandler = async (category) => {
    await createCategory(category)
    await loadCategories()
}

const loadData = async () => {
    await Promise.all([
        loadTasks(),
        loadCategories()
    ])
}

onMounted(loadData)
</script>

<template>
    <h1>Ruby + Vue Task Manager</h1>
    <CategoryForm @create-category="createCategoryHandler" />
    <CategoriesList :categories />
    <TaskForm
        :categories 
        @create-task="createTaskHandler"
    />
    <TasksList :tasks :categories />
</template>
