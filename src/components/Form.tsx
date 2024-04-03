/* eslint-disable react-refresh/only-export-components */
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent } from "react";
import { signal } from "@preact/signals-react";

export type Task = {
  id: string;
  task: string;
};

export const tasks = signal<Task[]>([]);
export const inputVal = signal("");

const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedTasks = [
      ...tasks.value,
      {
        id: uuidv4(),
        task: inputVal.value,
      },
    ];
    tasks.value = updatedTasks;
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputVal.value = e.target.value;
    console.log(inputVal.value);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-3">
      <input
        className="p-3 border rounded-lg focus:outline-none text-zinc-800 font-semibold"
        type="text"
        placeholder="new task..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="border p-3 border-white rounded-lg hover:rounded-xl"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
