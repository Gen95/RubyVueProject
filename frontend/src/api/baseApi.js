const API_URL = "http://localhost:3000";

export const request = async (url, options = {}) => {
    const response = await fetch(`${API_URL}${url}`, options);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
    }

    if (response.status === 204) {
        return null
    }

    return response.json();
} 