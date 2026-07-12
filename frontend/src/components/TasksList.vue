<script setup>
import TaskListItem from "./TaskListItem.vue";

const { tasks, categories } = defineProps({
  tasks: Array,
  categories: Array,
})

</script>

<template>
  <TaskListItem  v-for="task in tasks" :task :categories />
</template>

<style scoped>

</style>