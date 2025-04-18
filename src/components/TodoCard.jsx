import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="flex justify-between items-center w-full p-2 my-1 rounded-lg bg-[#4C5e73] text-gray-100 shadow-md transition hover:scale-101 duration-200">
      <span className="text-base sm:text-md font-medium break-words flex-1">
        {children}
      </span>
      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
          className=" hover:scale-110 transition-all  duration-200 opacity-20 hover:opacity-100 cursor-pointer"
        >
          <i className="fa-solid fa-pen-to-square text-[#acc3da] hover:text-blue-600 transition-colors duration-300 "></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
          className=" hover:scale-110 transition-all  duration-200 opacity-20 hover:opacity-100 cursor-pointer"
        >
          <i className="fa-regular fa-trash-can text-[#acc3da] hover:text-red-600 transition-colors duration-300 "></i>
        </button>
      </div>
    </li>
  );
}
