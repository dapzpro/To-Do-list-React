import React from "react";

export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
    <>
      <header className="flex items-center gap-2 w-full max-w-2xl mx-auto mt-8 px-4 ">
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter todo..."
          className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#01519e] transition duration-300"
        />
        <button
          onClick={() => {
            if (todoValue.trim() !== "") {
              handleAddTodo(todoValue);
            }
            setTodoValue("");
          }}
          className={`px-5 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
            todoValue.trim() === ""
              ? "bg-[#0d3c6e] opacity-50 cursor-not-allowed"
              : "bg-[#0d3c6e] hover:bg-[#0d3c6f] active:scale-95 hover:scale-105"
          }`}
        >
          I Got This!
        </button>
      </header>
    </>
  );
}
