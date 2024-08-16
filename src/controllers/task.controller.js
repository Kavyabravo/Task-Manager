const TaskService = require('../services/task.service')

class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    getAllTasks = (req, res) => {
        const tasks = this.taskService.getAllTasks();
        res.json(tasks);
    };

    getTaskById = (req, res) => {
        const task = this.taskService.getTaskById(parseInt(req.params.id));
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    };

    createTask = (req, res) => {
        const { title, description, completed } = req.body;
        const newTask = this.taskService.createTask({ title, description, completed });
        res.status(201).json(newTask);
    };

    updateTask = (req, res) => {
        const updatedTask = this.taskService.updateTask(parseInt(req.params.id), req.body);
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });

        res.json(updatedTask);
    };

    deleteTask = (req, res) => {
        const deletedTask = this.taskService.deleteTask(parseInt(req.params.id));
        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });

        res.status(200).end();
    };
}

module.exports = new TaskController(TaskService);
