import { useState, useContext } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { ListContext } from "../App";

export default function Todo(props) {
  const { lists, setLists, selectedList } = useContext(ListContext);
  const [animate, setAnimate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  function checkTodo() {
    setAnimate(true);
    lists[selectedList].todos.splice(props.index, 1);
    setTimeout(() => {
      setAnimate(false);
      setLists((l) => [...l]);
    }, 400); // Delay by animation duration
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateTodo();
    }
  }

  function updateTodo() {
    setLists((l) => {
      let arr = [...l];
      if (title.length < 1) return arr;
      arr[selectedList].todos[props.index].title = title;
      return arr;
    });
    setIsEditing(false);
  }

  return (
    <div
      className={`todo-item text-zinc-50 relative overflow-hidden flex-shrink-0 ${
        animate ? "animate-fade" : ""
      }`}
      onDoubleClick={() => {
        setIsEditing(true);
      }}
    >
      {isEditing ? (
        <input
          autoFocus
          placeholder="New todo name..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onBlur={() => setIsEditing(false)}
          className="bg-transparent focus:outline-none"
          onKeyDown={handleKeyDown}
        ></input>
      ) : (
        <p>{props.title}</p>
      )}

      <div className="flex items-center gap-6 text-2xl">
        <button
          onClick={(e) => {
            checkTodo();
          }}
        >
          <MdCheckBoxOutlineBlank />
        </button>
      </div>
    </div>
  );
}
