import { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { ListContext } from "../App";

export default function List(props) {
  const { lists, setLists, selectedList, setSelectedList } =
    useContext(ListContext);

  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function selectList() {
    setSelectedList(props.index);
  }

  function editList() {
    setIsEditing(true);
    setTitle("");
  }

  function updateTitle() {
    setLists((l) => {
      let arr = [...l];
      if (title.length < 1) return arr;
      arr[props.index].title = title;
      return arr;
    });
    setIsEditing(false);
  }

  function deleteList() {
    if (lists.length <= 1) {
      return;
    }

    setLists((l) => {
      let arr = [...l];
      arr.splice(props.index, 1);
      return arr;
    });

    if (selectedList > 0) {
      setSelectedList(selectedList - 1);
    } else {
      setSelectedList(selectedList);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateTitle();
    }
  }

  return (
    <button
      onClick={selectList}
      className={
        selectedList === props.index ? "list-item selected" : "list-item"
      }
      onDoubleClick={editList}
    >
      {isEditing ? (
        <div className="relative">
          <input
            autoFocus
            maxLength={18}
            placeholder="New title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent rounded-md text-white focus:outline-none"
            onBlur={() => {
              updateTitle();
            }}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      ) : (
        <>
          <p>{props.title}</p>
          <span
            onClick={(e) => {
              e.stopPropagation();
              deleteList();
            }}
          >
            <IoIosClose size={32} />
          </span>
        </>
      )}
    </button>
  );
}
