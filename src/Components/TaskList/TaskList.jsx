// TaskList.js
import React from "react";

const TaskList = ({ tasks, filterStatus, editTask, deleteTask }) => {
  const filteredTasks = tasks.filter(
    (task) => filterStatus === "all" || task.status === filterStatus
  );

  return (
    <div className="mt-6 ">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className="bg-white shadow p-4 mb-2 rounded">
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Date: {task.date}</p>
            <p>Priority: {task.priority ? "High" : "Normal"}</p>
            <p>Status: {task.status}</p>
            <div className="mt-2">
              <button
                onClick={() => editTask(task)}
                className="mr-4 bg-yellow-500 text-white py-1 px-3 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task)}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
