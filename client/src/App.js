import { useEffect, useState } from "react";
import InputTodos from "./components/InputTodos";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  //get Todos
  const getTodos = async () => {
    try {
      const response = await fetch("/todos");
      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  //add todo
  const addTodo = async (todo) => {
    try {
      const response = await fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const data = await response.json();
      setTodos([data, ...todos]);
    } catch (err) {
      console.error(err.message);
    }
  };

  //delete todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //Edit todo
  const editTodo = async (id, todo) => {
    try {
      console.log(id, todo);
      const response = await fetch(`/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const data = await response.json();
      setTodos(
        todos.map((todo) => (todo.todo_id === id ? { ...todo, ...data } : todo))
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <InputTodos addTodo={addTodo} />
        <ListTodos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </>
  );
}

export default App;
