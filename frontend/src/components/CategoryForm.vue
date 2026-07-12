<script setup>
import { defineEmits, ref } from "vue"

const newCategoryTitle = ref("");
const emit = defineEmits(['create-category'])

function createCategoryHandler() {
    if (!newCategoryTitle?.value) return;
    emit('create-category', newCategoryTitle.value)
    newCategoryTitle.value = ""
}
</script>

<template>
    <input
        v-model="newCategoryTitle"
        placeholder="Новая категория"
        id="new-category"
    />
    <button @click="createCategoryHandler">Добавить</button>
</template>
