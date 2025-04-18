import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <>
      <ul className="w-full max-w-2xl mx-auto px-4 py-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-900 ">
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
