
import { useState } from 'react';

export default function TaskForm({ fetchTasks }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });

        setTitle('');
        fetchTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new task"
            />
            <button type="submit">Add Task</button>
            <style jsx>{`
                input {
                    padding: 10px;
                    width: 70%;
                    margin-right: 10px;
                }
                button {
                    padding: 10px 20px;
                }
            `}</style>
        </form>
    );
}
