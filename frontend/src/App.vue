<script setup>
import { provide, ref, onMounted } from "vue"
import { createTask, getTasks } from "./api/tasks"
import { createCategory, getCategories } from "./api/categories"
import { CategoryForm, CategoriesList, ConfirmModal, TaskForm, TasksList } from './components';

const tasks = ref([]);
const categories = ref([]);
const currentTask = ref(null);
const isDeleteModalOpen = ref(false);

const loadTasks = async () => {
    tasks.value = await getTasks();
}
const loadCategories = async () => {
    categories.value = await getCategories();
}

const openDeleteModal = (task) => {
    currentTask.value = task;
    isDeleteModalOpen.value = true;
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

provide("tasksContext", {
    loadTasks,
    loadCategories,
})
provide("modalContext", { openDeleteModal, currentTask })
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
    <div v-if="!tasks?.length">Создайте первую задачу</div>
    <ConfirmModal v-if="isDeleteModalOpen" v-model="isDeleteModalOpen">
        {{ currentTask.title }}
    </ConfirmModal>
</template>
