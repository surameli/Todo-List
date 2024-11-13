import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskStatus, setTaskStatus] = useState("pending");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      status: taskStatus,
      priority,
    };

    addTask(newTask);
    setTaskTitle("");
    setTaskDescription("");
    setTaskDueDate("");
    setTaskStatus("pending");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg w-4/5 mr-400">
      <h3 className="text-2xl mb-4 font-semibold text-gray-800">Add New Task</h3>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Task Title</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md"
          placeholder="Enter task title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Description</label>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md"
          placeholder="Enter task description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Status</label>
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Priority</label>
        <input
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md"
          placeholder="Enter task priority (e.g., Low, Medium, High)"
        />
      </div>
      <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
