import { useContext } from "react";
import { MdCheckBoxOutlineBlank, MdEdit } from "react-icons/md";
import { ListContext } from "../App";

export default function Todo(props) {
  const { lists, setLists, selectedList } = useContext(ListContext);

  function checkTodo() {
    lists[selectedList].todos.splice(props.index, 1);
    setLists((l) => [...l]);
  }
  return (
    <div className="todo-item text-zinc-50">
      <p>{props.title}</p>
      <div className="flex items-center gap-6 text-2xl">
        <button>
          <MdEdit />
        </button>
        <button
          onClick={() => {
            checkTodo();
          }}
        >
          <MdCheckBoxOutlineBlank />
        </button>
      </div>
    </div>
  );
}
