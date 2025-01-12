import { useContext, useState } from "react";
import { ListContext } from "../App";
import List from "./List";
import NewListInput from "./NewListInput";
import NewListButton from "./NewListButton";

export default function ListCollection() {
  const { lists } = useContext(ListContext);
  const [creatingNewList, setCreatingNewList] = useState(false);

  return (
    <div className="flex flex-col gap-4 h-full">
      <h2 className="text-4xl text-zinc-50 px-4">Lists</h2>
      <hr></hr>
      <div className="flex flex-col gap-4 overflow-y-scroll hide-scrollbar">
        {lists.map((list, index) => {
          return <List key={index} index={index} title={list.title} />;
        })}
      </div>
      {creatingNewList ? (
        <NewListInput setCreatingNewList={setCreatpningNewList} />
      ) : (
        <NewListButton setCreatingNewList={setCreatingNewList} />
      )}
    </div>
  );
}
