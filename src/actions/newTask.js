export const createTask = (task) => {
    return {
        type: 'NEW_TASK',
        data: task
    }
}