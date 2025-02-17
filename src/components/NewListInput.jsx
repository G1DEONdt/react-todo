import { useContext, useState } from "react";
import Collection from "../data/Collection";
import { ListContext } from "../App";

export default function NewListInput(props) {
  const [title, setTitle] = useState("");
  const { lists, setLists, setSelectedList } = useContext(ListContext);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

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
        onKeyDown={handleKeyDown}
        onBlur={() => {
          props.setCreatingNewList(false);
        }}
      ></input>
    </div>
  );
}
