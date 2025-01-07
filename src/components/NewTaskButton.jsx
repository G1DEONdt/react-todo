import { IoIosAdd } from "react-icons/io";

export default function NewTaskButton() {
  return (
    <div className="absolute bottom-12 w-full flex items-center rounded-xl shadow-custom">
      <input
        placeholder="Add New Task..."
        className="w-full px-8 py-4 rounded-xl bg-zinc-700 text-zinc-400"
      ></input>
      <button className="text-zinc-50 text-5xl absolute right-2">
        <IoIosAdd />
      </button>
    </div>
  );
}
