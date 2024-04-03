import React from "react";
import { tasks, Task } from "./Form";

const List = () => {
  const [todos, setTodos] = React.useState<Task[]>([]);
  React.useEffect(() => {
    const unsub = tasks.subscribe((newValue) => {
      setTodos(newValue);
    });
    return () => {
      unsub();
    };
  }, []);
  const handleTaskDelete = (id: string) => {
    const updatedTasks = tasks.value.filter((task) => task.id !== id);
    tasks.value = updatedTasks;
  };
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <li
          className="flex justify-between items-center w-2/3 bg-slate-100 rounded-md p-1 text-black"
          key={todo.id}
        >
          <span>{todo.task}</span>
          <button
            className="p-1 bg-slate-500 rounded-md text-white hover:rounded-lg"
            onClick={() => handleTaskDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
