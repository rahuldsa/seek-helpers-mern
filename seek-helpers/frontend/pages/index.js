
import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="container">
            <h1>📝 To-Do List</h1>
            <TaskForm fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} />
            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: auto;
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
