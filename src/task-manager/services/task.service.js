const TaskRepository = require('../repositories/task.repository');

class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    getAllTasks() {
        return this.taskRepository.getAllTasks();
    }

    getTaskById(id) {
        return this.taskRepository.getTaskById(id);
    }

    createTask(task) {
        return this.taskRepository.createTask(task);
    }

    updateTask(id, taskData) {
        return this.taskRepository.updateTask(id, taskData);
    }

    deleteTask(id) {
        return this.taskRepository.deleteTask(id);
    }
}

module.exports = new TaskService(TaskRepository);