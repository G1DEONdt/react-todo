import React, { useState, useContext } from "react";
import { ListContext } from "../App";
import Todo from "./Todo";
import AddTodoButton from "./AddTodoButton";
import CompletedTodoList from "./CompletedTodoList";

export default function TodoList() {
  const { lists, setLists, selectedList } = useContext(ListContext);
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function editList() {
    setIsEditing(true);
    setTitle("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateTitle();
    }
  }

  function updateTitle() {
    setLists((l) => {
      let arr = [...l];
      if (title.length < 1) return arr;
      arr[selectedList].title = title;
      return arr;
    });
    setIsEditing(false);
  }

  return (
    <>
      {!isEditing ? (
        <h1
          className="text-4xl text-zinc-50 text-center"
          onDoubleClick={() => {
            editList();
          }}
        >
          {lists[selectedList]?.title}
        </h1>
      ) : (
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter new title..."
          className="px-4 py-2 rounded-lg bg-zinc-700 text-zinc-50 text-xl"
          autoFocus
          onKeyDown={handleKeyDown}
          onBlur={() => {
            updateTitle();
          }}
        ></input>
      )}

      <hr></hr>
      <div className="flex flex-col gap-6 w-full h-4/6 overflow-auto hide-scrollbar px-2">
        {lists[selectedList]?.todos.map((todo, index) => {
          if (todo.checked) return;
          return <Todo key={index} title={todo.title} index={index} />;
        })}
        <CompletedTodoList />
      </div>
      <AddTodoButton />
    </>
  );
}
