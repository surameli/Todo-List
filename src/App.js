import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header/Header";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("add");
  const [filterStatus, setFilterStatus] = useState("toggle");

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar setView={setView} setFilterStatus={setFilterStatus} />
        <div className="flex-1 p-6">
          {view === "add" && <TaskForm addTask={addTask} />}
          {view === "all" && <TaskList tasks={tasks} filterStatus={filterStatus} />}
        </div>
      </div>
    </div>
  );
};

export default App;
