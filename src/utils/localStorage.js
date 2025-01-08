import Collection from "../data/Collection";

export const loadListsFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return data || [Collection("Untitled")];
};

export const saveListsToLocalStorage = (lists) => {
  localStorage.setItem("data", JSON.stringify(lists));
};
