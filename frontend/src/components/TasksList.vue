<script setup>
import TaskListItem from "./TasksListItem.vue";

const { tasks, categories } = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  }
})

</script>

<template>
  <TaskListItem
    v-for="task in tasks"
    :key="task.id"
    :task
    :categories
  />
</template>
