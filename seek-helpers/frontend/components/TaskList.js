
export default function TaskList({ tasks, fetchTasks }) {
    const toggleTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'PUT' });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
        fetchTasks();
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span
                        onClick={() => toggleTask(task.id)}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                    >
                        {task.title}
                    </span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
            <style jsx>{`
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0;
                    align-items: center;
                }
                button {
                    padding: 5px 10px;
                }
            `}</style>
        </ul>
    );
}
