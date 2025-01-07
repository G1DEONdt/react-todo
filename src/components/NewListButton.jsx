export default function NewListButton(props) {
  return (
    <button
      onClick={() => {
        props.setCreatingNewList(true);
      }}
      className="bg-zinc-900 rounded-lg py-2 px-4 text-zinc-50 hover:bg-zinc-300 hover:text-zinc-800"
    >
      Create New List
    </button>
  );
}
