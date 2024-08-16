class TaskRepository {
    constructor() {
        this.tasks = [];
    }

    getAllTasks() {
        return this.tasks;
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    createTask(task) {
        task.id = this.tasks.length + 1;
        this.tasks.push(task);
        return task;
    }

    updateTask(id, updatedTask) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;

        this.tasks[taskIndex] = { id, ...updatedTask };
        return this.tasks[taskIndex];
    }

    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;

        const deletedTask = this.tasks.splice(taskIndex, 1);
        return deletedTask[0];
    }
}

module.exports = new TaskRepository();
