import { api } from "./index";

export const postTask = async (task) => {
    const response = await api.post('/tasks', task)
    return response.data
}

export const getAllTasks = async () => {
    const response = await api.get('/tasks')
    return response.data
}

export const deleteTask = async (id) => {
    const response = await api.delete(`/tasks/${id}`)
    console.log(response.data)
    return response.data
}