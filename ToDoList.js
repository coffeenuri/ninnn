import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tasks/');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Ошибка при получении задач:', error);
    }
  };

  const addTask = async () => {
    if (task) {
      try {
        const response = await fetch('http://127.0.0.1:8000/tasks/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ task })
        });

        if (response.ok) {
          const newTask = await response.json();
          setTasks([...tasks, newTask]);
          setTask("");
        } else {
          console.error('Ошибка при добавлении задачи');
        }
      } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
      }
    }
  };

  const removeTask = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== id));
      } else {
        console.error('Ошибка при удалении задачи');
      }
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
    }
  };

  return (
    <div className="to-do-list">
      <h2>Список задач</h2>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Введите новую задачу" 
      />
      <button onClick={addTask}>Добавить задачу</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} <button onClick={() => removeTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;