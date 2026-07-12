<script setup>
import { inject } from "vue"
import { deleteTask } from "../api/tasks";

const props = defineProps({
    isOpened: {
        type: Boolean,
    }
});

const { loadTasks } = inject("tasksContext")
const { currentTask } = inject("modalContext")

const emit = defineEmits(["update:isOpened"]);

const handleClose = () => {
    emit("update:isOpened", false)
}

const handleDelete = async () => {
    await deleteTask(currentTask.value.id);
    currentTask.value = null;
    await loadTasks();
    handleClose();
}
</script>

<template>
    <Teleport to="body">
        <div class="modal-layout">
            <div class="confirm-modal">
                <h2>Удаление задачи</h2>
                <p>Вы действительно хотите удалить задачу <strong><slot /></strong></p>
                <div class="buttons-container">
                    <button
                        class="button"
                        @click="handleClose"
                    >Отмена</button>
                    <button
                        class="button button_delete"
                        @click="handleDelete"
                    >Удалить</button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .modal-layout {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .confirm-modal {
        box-sizing: border-box;
        padding: 10px;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 10px;
        width: 500px;

        .buttons-container {
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            gap: 10px;


            .button {
                flex: 1;
                border: none;
                cursor: pointer;
                padding: 5px;
            }

            .button_delete {
                background-color: crimson;
            }
        }
    }
</style>
