import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow key={index} task={task} onDelete={onDelete}/>;
      })}
    </div>
  );
}

export default TaskList;
