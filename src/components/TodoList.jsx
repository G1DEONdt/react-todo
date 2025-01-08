import React, { useContext } from "react";
import { ListContext } from "../App";
import Todo from "./Todo";
import AddTodoButton from "./AddTodoButton";

export default function TodoList() {
  const { lists, selectedList } = useContext(ListContext);

  return (
    <>
      <h1 className="text-4xl text-zinc-50 text-center">
        {lists[selectedList]?.title}
      </h1>
      <hr></hr>
      {lists[selectedList]?.todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} index={index} />;
      })}
      <AddTodoButton />
    </>
  );
}
