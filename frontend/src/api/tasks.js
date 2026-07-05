export async function getTasks() {
    const response = await fetch('http://localhost:3000/tasks')

    if (!response.ok) {
        throw new Error("Не удалось получить список задач")
    }

    return await response.json()
}