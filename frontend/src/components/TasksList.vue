<script setup>
import { defineProps } from "vue"

const props = defineProps({
  tasks: Array,
})
</script>

<template>
    <div v-for="task in tasks" :key="task.id">
        {{ task.title }}: {{ task.completed ? 'Выполнено' : "В процессе" }}
    </div>
</template>

<style scoped>

</style>