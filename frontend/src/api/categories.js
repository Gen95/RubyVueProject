import { request } from './baseApi';

export async function getCategories() {
    return request(`categories`)
}

export async function createCategory(name) {
    return request(`/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category: {
                name,
            }
        })
    })
}