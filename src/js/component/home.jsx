
import React, { useState } from 'react';
import '../../styles/index.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1>Lista de Tareas</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyPress={handleKeyPress} 
                placeholder="Añadir nueva tarea"
            />
            <ul>
                {tasks.length === 0 ? (
                    <li>No hay tareas, añadir tareas</li>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            {task}
                            <span className="delete-icon" onClick={() => handleDelete(index)}>🗑️</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default TodoList;
