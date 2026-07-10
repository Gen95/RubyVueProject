import { request } from './baseApi';

export async function getTasks() {
    return request(`/tasks`)
}

export async function getTask(id) {
    return request(`/tasks/${id}`)
}

export async function createTask({ title, category_id }) {
    return request(`/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: {
                title,
                category_id,
                completed: false
            }
        })
    })
}

export async function updateTask(id, data) {
    return request(`/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: data
        })
    })
}

export async function deleteTask(id) {
    return request(`/tasks/${id}`, {
        method: "DELETE",
    })
}