import { useState, useContext, useEffect } from "react";
import { MdOutlineCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { ListContext } from "../App";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Todo(props) {
  const { lists, setLists, selectedList } = useContext(ListContext);
  const [animate, setAnimate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [hoverCheck, setHoverCheck] = useState(false);
  const todo = lists[selectedList].todos[props.index];

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateTodo();
    }
  }

  function toggleChecked() {
    if (todo.checked) {
      todo.checked = false;
      setLists((l) => [...l]); // Surely this is so scuffed, maybe useEffect on todo variable to update list.
      return;
    }

    setAnimate(true);
    todo.checked = true;
    setTimeout(() => {
      setAnimate(false);
      setLists((l) => [...l]); // Here too...
    }, 250); // Delay by animation duration
  }

  function deleteTodo() {
    lists[selectedList].todos.splice(props.index, 1);
    setLists((l) => [...l]);
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
          onClick={toggleChecked}
          onMouseEnter={() => setHoverCheck(true)}
          onMouseLeave={() => setHoverCheck(false)}
          className="relative"
        >
          {todo.checked ? (
            <>
              {hoverCheck ? (
                <MdCheckBoxOutlineBlank className="absolute z-10 -translate-x-1/2 -translate-y-1/2" />
              ) : (
                <MdOutlineCheckBox className="absolute z-10 -translate-x-1/2 -translate-y-1/2" />
              )}
            </>
          ) : (
            <>
              <MdCheckBoxOutlineBlank className="absolute z-10 -translate-x-1/2 -translate-y-1/2" />
              {hoverCheck && (
                <MdOutlineCheckBox className="absolute z-0 -translate-x-1/2 -translate-y-1/2 opacity-75" />
              )}
            </>
          )}
        </button>
        <button onClick={deleteTodo}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}
