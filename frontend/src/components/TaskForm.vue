<script setup>
import { defineProps, ref } from "vue"

defineProps({
    categories: Array,
})

const newTaskTitle = ref("");
const newTaskCategory = ref(null);
const emit = defineEmits(['create-task'])

const createTaskHandler = async () => {
    if (!newTaskTitle?.value) return;
    emit('create-task', { title: newTaskTitle.value, category_id: newTaskCategory.value })
    newTaskTitle.value = ""
}
</script>

<template>
    <input
        v-model="newTaskTitle"
        placeholder="Новая задача"
    />
    <select v-model="newTaskCategory">
        <option :value="null">Без категории</option>
        <option v-for="category in categories" :value="category.id">
            {{ category.name }}
        </option>
    </select>
    <button @click="createTaskHandler">Добавить</button>
</template>
