const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
    return (
      <li className="bg-white p-4 rounded shadow-md flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-500">Priority: {task.priority}</p>
          <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleCompletion(task.id)}
            className={`px-4 py-2 rounded ${task.status === "completed" ? "bg-green-500" : "bg-red-500"} text-white`}
          >
            {task.status === "completed" ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => editTask(task.id, { title: task.title, description: task.description })}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </li>
    );
  };
  
  export default TaskItem;
  