import { useContext, useState } from "react";
import Collection from "../data/Collection";
import { ListContext } from "../App";

export default function NewListInput(props) {
  const [title, setTitle] = useState("");
  const { lists, setLists, setSelectedList } = useContext(ListContext);

  function handleAdd() {
    let newList;

    if (!title) {
      newList = Collection("Untitled");
    } else {
      newList = Collection(title);
    }

    setLists((prevList) => [...prevList, newList]);
    setSelectedList(lists.length);
    props.setCreatingNewList(false);
  }

  return (
    <div className="w-full flex items-center relative text-zinc-50">
      <input
        placeholder="Enter List Title..."
        className="bg-zinc-900 rounded-lg py-2 px-4 w-full text-white"
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <button
        onClick={handleAdd}
        className="absolute right-4 bg-zinc-700 px-4 rounded-md hover:bg-zinc-300 hover:text-black"
      >
        Add
      </button>
    </div>
  );
}
