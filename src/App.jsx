import { createContext, useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import ListCollection from "./components/ListCollection";
import {
  loadListsFromLocalStorage,
  saveListsToLocalStorage,
} from "./utils/localStorage";

export const ListContext = createContext();

function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setLists(loadListsFromLocalStorage());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveListsToLocalStorage(lists);
    }
  }, [lists]);

  return (
    <ListContext.Provider
      value={{ lists, setLists, selectedList, setSelectedList }}
    >
      <div className="h-screen w-screen bg-zinc-900 font-mono flex">
        <div className="h-full w-96 py-20 px-12 bg-zinc-700 shadow-custom">
          <ListCollection />
        </div>
        <div className="w-full flex-1 flex justify-center py-16">
          <div className="w-3/5 max-w-screen-md flex flex-col gap-6 relative">
            <TodoList />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
}

export default App;
