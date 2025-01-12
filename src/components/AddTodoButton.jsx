import { useContext, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { ListContext } from "../App";
import Todo from "../data/Todo";

export default function AddTodoButton() {
  const [title, setTitle] = useState("");
  const { lists, setLists, selectedList } = useContext(ListContext);

  function addTodo() {
    const newTodo = Todo(title);
    lists[selectedList].todos.push(newTodo);
    setLists((l) => [...l]);
    setTitle("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="absolute bottom-12 w-full flex items-center rounded-xl shadow-custom">
      <input
        placeholder="Add New Task..."
        className="w-full px-8 py-4 rounded-xl bg-zinc-700 text-zinc-400"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      ></input>
      <button
        onClick={() => {
          addTodo();
        }}
        className="text-zinc-50 text-4xl absolute right-2"
      >
        <IoIosAdd />
      </button>
    </div>
  );
}
