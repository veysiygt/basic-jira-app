function TaskShow({task, onDelete}) {

    const handleDeleteClick = () => {
        onDelete(task.id)
    }

    console.log(task);
    return (
        <div className="task-show">
            <h3>Your Task</h3>
            <p>{task.title}</p>
            <h3>TO DO</h3>
            <p>{task.desc}</p>
            <div>
                <button className="task-delete" onClick={handleDeleteClick}>Delete</button>
                <button className="task-update">Update</button>
            </div>
        </div> 
    );
}

export default TaskShow;