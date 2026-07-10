<script setup>
import { defineProps } from "vue"

defineProps({
    categories: Array,
})
</script>

<template>
    <div v-for="category in categories" :key="category.id">
        {{ category.name }}
    </div>
</template>
