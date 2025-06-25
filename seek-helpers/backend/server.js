
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];

function generateId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'Title is required.' });
    }

    const newTask = { id: generateId(), title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
    }

    task.completed = !task.completed;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(t => t.id !== id);
    res.json({ message: 'Task deleted successfully.' });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
