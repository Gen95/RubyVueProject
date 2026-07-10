<script setup>
import { defineProps } from "vue"

const { tasks, categories } = defineProps({
  tasks: Array,
  categories: Array,
})

const getCategoryNameById = (id) => {
  if (!id) return 'Без категории';
  return categories.find(item => item.id === id).name
}
</script>

<template>
    <div v-for="task in tasks" :key="task.id">
        {{ task.title }}: {{ task.completed ? 'Выполнено' : "В процессе" }} / {{ getCategoryNameById(task.category_id) }}
    </div>
</template>

<style scoped>

</style>