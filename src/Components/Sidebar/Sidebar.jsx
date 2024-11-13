import React from "react";

const Sidebar = ({ setView, setFilterStatus }) => {
  return (
    <div className="w-60 bg-slate-100 p-4">
      <h2 className="text-xl font-bold mb-24 text-center">Menu</h2>
      <button
        onClick={() => setView("add")}
        className="w-full p-2 text-left bg-slate-200 rounded-lg mb-2 hover:bg-slate-400"
      >
        Add Task
      </button>
      <button
        onClick={() => setView("all")}
        className="w-full p-2 text-left bg-slate-200 rounded-lg mb-2 hover:bg-slate-400"
      >
        Display All Tasks
      </button>

      <div className="mt-4">
        <label htmlFor="filter" className="block mb-2 font-semibold">
          Filter Task
        </label>
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          className="w-full p-2 bg-white rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <option value="toggle">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
