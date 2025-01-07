import Todo from "./components/Todo";
import { createContext, useEffect, useState } from "react";
import List from "./components/List";
import NewListButton from "./components/NewListButton";
import NewListInput from "./components/NewListInput";
import NewTaskButton from "./components/NewTaskButton";

export const ListContext = createContext();

function App() {
  const [lists, setLists] = useState([]);
  const [creatingNewList, setCreatingNewList] = useState(false);
  const [selectedList, SetSelectedList] = useState(0);

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      <div className="h-screen w-screen bg-zinc-900 font-mono flex">
        <div className="h-full w-96 py-20 px-12 bg-zinc-700 shadow-xl">
          <div className="flex flex-col gap-4 h-full">
            <h2 className="text-4xl text-zinc-50 px-4">Lists</h2>
            <hr></hr>
            <div className="flex flex-col gap-4">
              {lists.map((list, index) => {
                return <List key={index} index={index} title={list.title} />;
              })}
            </div>
            {creatingNewList ? (
              <NewListInput
                lists={lists}
                setLists={setLists}
                setCreatingNewList={setCreatingNewList}
              />
            ) : (
              <NewListButton setCreatingNewList={setCreatingNewList} />
            )}
          </div>
        </div>
        <div className="w-full flex-1 flex justify-center py-16">
          <div className="w-3/5 flex flex-col gap-6 relative">
            <h1 className="text-4xl text-zinc-50 text-center">Lorem Ipsum</h1>
            <hr></hr>
            <Todo />
            <NewTaskButton />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
}

export default App;
