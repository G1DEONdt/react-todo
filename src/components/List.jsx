import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { ListContext } from "../App";

export default function List(props) {
  const { lists, setLists, selectedList, setSelectedList } =
    useContext(ListContext);

  function selectList() {
    setSelectedList(props.index);
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
  return (
    <button
      onClick={selectList}
      className={
        selectedList === props.index ? "list-item selected" : "list-item"
      }
    >
      <p>{props.title}</p>
      <span
        onClick={(e) => {
          e.stopPropagation();
          deleteList();
        }}
      >
        <IoIosClose size={32} />
      </span>
    </button>
  );
}
