import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { ListContext } from "../App";

export default function List(props) {
  const { lists, setLists } = useContext(ListContext);

  function deleteList() {
    setLists((l) => {
      let arr = [...l];
      arr.splice(props.index, 1);
      return arr;
    });
  }
  return (
    <div className="list-item">
      <p>{props.title}</p>
      <button onClick={deleteList}>
        <IoIosClose size={32} />
      </button>
    </div>
  );
}
