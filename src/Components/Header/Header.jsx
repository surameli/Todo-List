import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-300  p-4 flex justify-between items-center text-white">
      <h1 className="text-3xl ml-20 font-bold text-black">Todo List</h1>
      <div className="flex items-center w-auto">
        <input
          type="text"
          placeholder="Search tasks..."
          className="p-2 rounded-lg bg-white  text-black"
        />
      </div>
    </div>
  );
};

export default Header;
