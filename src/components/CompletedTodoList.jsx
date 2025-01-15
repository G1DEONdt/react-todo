import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ListContext } from "../App";
import Todo from "./Todo";

export default function CompletedTodoList() {
  const { lists, selectedList } = useContext(ListContext);
  const [displayCompleted, setDisplayCompleted] = useState(false);

  function toggle() {
    setDisplayCompleted(!displayCompleted);
  }

  return (
    <div>
      <div className="flex items-center gap-4 text-zinc-300 text-xl">
        <button onClick={toggle} className="flex items-center gap-4">
          <p className="">Completed</p>
          {displayCompleted ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>
        <hr className="flex-grow"></hr>
      </div>
      {displayCompleted ? (
        <div className="flex flex-col gap-6 py-4 px-2 opacity-50">
          {lists[selectedList].todos.map((todo, index) => {
            if (!todo.checked) return;
            return <Todo key={index} title={todo.title} index={index} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
