import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TypingEffect from "./components/TypingEffect";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  function persisData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodo) {
    if (editingIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = newTodo;
      persisData(updatedTodos);
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      const newTodos = [...todos, newTodo];
      persisData(newTodos);
      setTodos(newTodos);
    }
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todos, todoIndex) => {
      return todoIndex !== index;
    });
    persisData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    setEditingIndex(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TypingEffect />
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
