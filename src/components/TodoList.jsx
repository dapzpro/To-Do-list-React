import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <>
      <ul
        className="w-full max-w-2xl mx-auto px-4 py-2 max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 "
      >
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </>
  );
}
