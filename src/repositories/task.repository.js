const fs = require('fs');
const path = require('path');

class TaskRepository {
    constructor() {
        this.filePath = path.join(__dirname, '../../task.json');
        this.tasks = this._readTasksFromFile().tasks || [];
    }

    // Helper method to read tasks from the JSON file
    _readTasksFromFile() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data) || { tasks: [] };
        } catch (err) {
            console.error('Error reading tasks.json:', err);
            return { tasks: [] };
        }
    }

    // Helper method to write tasks to the JSON file
    _writeTasksToFile() {
        try {
            const data = { tasks: this.tasks };
            fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
        } catch (err) {
            console.error('Error writing to tasks.json:', err);
        }
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
        this._writeTasksToFile();
        return task;
    }

    updateTask(id, updatedTask) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;

        this.tasks[taskIndex] = { id, ...updatedTask };
        this._writeTasksToFile();
        return this.tasks[taskIndex];
    }

    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;

        const deletedTask = this.tasks.splice(taskIndex, 1);
        this._writeTasksToFile();
        return deletedTask[0];
    }
}

module.exports = new TaskRepository();
