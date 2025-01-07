import { MdCheckBoxOutlineBlank, MdEdit } from "react-icons/md";

export default function Todo() {
  return (
    <div className="todo-item text-zinc-50">
      <p>Lorem ipsum dor les sore</p>
      <div className="flex items-center gap-6 text-2xl">
        <button>
          <MdEdit />
        </button>
        <button>
          <MdCheckBoxOutlineBlank />
        </button>
      </div>
    </div>
  );
}
