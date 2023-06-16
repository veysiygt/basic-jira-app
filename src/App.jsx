import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);
  
  const createTask = (title,desc) => {

    const createdTasks = [
      ...tasks,{
        id: Math.round(Math.random()*999999),
        title,
        desc
      }
    ];

    setTasks(createdTasks);

  }

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  }
  

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById}/>
    </div>
  )
}

export default App
