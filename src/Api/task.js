import { api } from "./index";

export const postTask = async (task) => {
    const response = await api.post('/tasks', task)
    return response.data
}
export const getAllTasks = async () => {
    const response = await api.get('/tasks')
    return response.data
}