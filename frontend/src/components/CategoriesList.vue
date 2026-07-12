<script setup>
defineProps({
    categories: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div v-for="category in categories" :key="category.id">
        {{ category.name }}
    </div>
</template>
