import React, { useState } from "react";



function TodoList() {
    const [tasks, setTasks] = useState([]); 
    const [inputValue, setInputValue] = useState(""); 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]); 
            
            setInputValue(""); 
        }
    };

    const deleteTask = (indexToDelete) => {

        const newTasks = tasks.filter((task, index) => index !== indexToDelete);
        
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h1>todos</h1>
            <div className="todo-list-paper">
                <input 
                    type="text" 
                    placeholder="What needs to be done?"
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyDown={handleKeyDown} 
                />
                <ul>
                    {/* 4. RENDERIZADO CONDICIONAL Y DE LISTAS */}
                    {tasks.length === 0 ? (
                        <li className="no-tasks">No hay tareas, añadir tareas</li>
                    ) : (
                        tasks.map((task, index) => (
                            <li key={index}>
                                {task}
                                {/* El ícono de eliminar llama a deleteTask con su 'index' */}
                                <span 
                                    className="delete-icon" 
                                    onClick={() => deleteTask(index)}
                                >
                                    X
                                </span>
                            </li>
                        ))
                    )}
                </ul>
                <div className="footer">
                    {/* 5. CONTADOR DE TAREAS */}
                    {tasks.length} item left
                </div>
            </div>
            {/* Estos divs extra son para el efecto de "stack" de papel */}
            <div className="paper-stack-2"></div>
            <div className="paper-stack-3"></div>
        </div>
    );
}

export default TodoList;