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

  const editTaskById = (id,updatedTitle,updatedDesc) => {
    const updatedTasks = tasks.map((task) =>{
      if(task.id === id){
        return {id,title:updatedTitle,desc:updatedDesc}
      }
      return task;
    }); 
    setTasks(updatedTasks);
  }
  

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
