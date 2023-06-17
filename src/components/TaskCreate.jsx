import { useState } from "react";

/**
 * TaskCreate component allows creating a new task.
 *
 * @param {Object} props - Props containing the onCreate function.
 * @param {function} props.onCreate - Function called when a new task is created.
 */
function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [desc, setDesc] = useState(task ? task.desc : '');

  /**
   * Function called when the title input value changes.
   * @param {Object} event - Event representing the input value change.
   */
  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  /**
   * Function called when the description input value changes.
   * @param {Object} event - Event representing the input value change.
   */
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  }

  /**
   * Function called when the form is submitted.
   * @param {Object} event - Form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
      onUpdate(task.id,title,desc);
    }
    else{
      onCreate(title, desc);
    }
    setTitle('');
    setDesc('');
  }

  return (
    <div> {taskFormUpdate ? <div className="task-update">
    <h3>Please Edit Task!</h3>
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="task-label">Edit Title</label>
      <input value={title} onChange={handleChange} className="task-input" />
      <label className="task-label">Edit Task Description</label>
      <textarea value={desc} onChange={handleDescChange} className="task-input" rows={5} />
      <button className="task-button update-button" type="submit">Edit</button>
    </form>
  </div>:<div className="task-create">
      <h3>Please Add Task!</h3>
      <form className="task-form" onSubmit={handleSubmit}>
        <label className="task-label">Title</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Description</label>
        <textarea value={desc} onChange={handleDescChange} className="task-input" rows={5} />
        <button className="task-button" type="submit">Create</button>
      </form>
    </div>} </div>
    
  );
}

export default TaskCreate;
