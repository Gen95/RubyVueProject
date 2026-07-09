const API_URL = "http://localhost:3000";

export async function getTasks() {
    const response = await fetch(`${API_URL}/tasks`)

    if (!response.ok) {
        throw new Error("Не удалось получить список задач")
    }

    return await response.json()
}

export async function createTask(title) {
    const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: {
                title,
                completed: false
            }
        })
    })

    if (!response.ok) {
        throw new Error("Не удалось создать задачу")
    }

    return response.json()
}