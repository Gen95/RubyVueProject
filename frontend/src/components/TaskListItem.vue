<script setup>
import { inject, ref } from "vue"
import { updateTask } from "../api/tasks";

const { task, categories } = defineProps({
    task: {
        id: String,
        title: String,
        completed: Boolean,
        category_id: Number,
    },
    categories: Array,
});

const { loadTasks } = inject("tasksContext")
const { openDeleteModal } = inject("modalContext")

const isEditing = ref(false);
const newTitle = ref(null);

const handleEdit = () => {
    newTitle.value = task.title;
    isEditing.value = true;
}

const handleSave = async () => {
    if (task.title !== newTitle.value) {
        await updateTask(task.id, { title: newTitle.value});
        await loadTasks();
    }
    isEditing.value = false;
    newTitle.value = null;
}

const changeCompleted = async (event) => {
    await updateTask(task.id, { completed: event.target.checked});
}

const handleDelete = async () => {
    openDeleteModal(task);
}

const getCategoryNameById = (id) => {
  if (!id) return 'Без категории';
  return categories?.find(item => item.id === id)?.name
}
</script>

<template>
    <div class="list-item">
        <div
            class="list-item_title"
            v-if="!isEditing"
        >{{ task.title }}</div>
        <input
            class="list-item_title"
            v-if="isEditing"
            :id="`task-${task.id}_title`"
            v-model="newTitle"
        />
        <div class="list-item_category">{{ getCategoryNameById(task.category_id) }}</div>
        <div>
            <input
                type="checkbox"
                id="completed"
                v-model="task.completed"
                @change="changeCompleted"
            />
            <label for="completed">{{ task.completed ? 'Выполнено' : "В процессе" }}</label>
        </div>
        <div class="list-item_buttons">
            <button
                 class="list-item_button"
                v-if="!isEditing"
                @click="handleEdit"
            >Редактировать</button>
            <button
                class="list-item_button button_save"
                v-if="isEditing"
                @click="handleSave"
            >Сохранить</button>
            <button
                class="button_delete"
                @click="handleDelete"
            >Удалить</button>
        </div>
    </div>
</template>

<style scoped>
    .list-item {
        display: flex;
        flex-direction: row;
        padding: 10px;
        gap: 10px;
        border-bottom: 1px solid #2e303a;

        &:hover {
            background-color: #2e303a;
            transition: background-color 0.3s ease;
        };

        .list-item_title {
            font-weight: bold;
            flex: 1;
            text-align: left;
        };

        .list-item_category {
            width:  15%;
        };
        
        .list-item_buttons {
            display: flex;
            flex-direction: row;
            gap: 10px;

            .list-item_button {
                width: 110px;
                border: none;
                cursor: pointer;
                padding: 5px;

                &:hover {
                    filter: brightness(120%); 
                    transition: filter 0.3s ease;
                };
            };

            .button_save {
                background-color: seagreen;
            };

            .button_delete {
                background-color: crimson;
                border: none;
                cursor: pointer;

                &:hover {
                    filter: brightness(120%); 
                    transition: filter 0.3s ease;
                };
            };
        };
    };
</style>