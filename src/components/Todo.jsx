import { useState, useContext } from "react";
import { MdCheckBoxOutlineBlank, MdEdit } from "react-icons/md";
import { ListContext } from "../App";
import { PiChecksThin } from "react-icons/pi";

export default function Todo(props) {
  const { lists, setLists, selectedList } = useContext(ListContext);
  const [animate, setAnimate] = useState(false);
  const [pulses, setPulses] = useState([]);

  function handleClick(e) {
    // Get the button's bounding rectangle
    const rect = e.target.getBoundingClientRect();

    // Calculate the click position relative to the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add a new pulse with unique ID and position
    const newPulse = {
      id: Date.now(),
      x,
      y,
    };
    setPulses((prev) => [...prev, newPulse]);

    // Remove the pulse after the animation end
    setTimeout(() => {
      setPulses((prev) => prev.filter((pulse) => pulse.id !== newPulse.id));
      checkTodo();
    }, 1000); // Match the animation duration
  }

  function checkTodo() {
    setAnimate(true);
    lists[selectedList].todos.splice(props.index, 1);
    setLists((l) => [...l]);
  }

  return (
    <div
      className={`todo-item text-zinc-50 relative overflow-hidden flex-shrink-0 `}
    >
      <p>{props.title}</p>
      <div className="flex items-center gap-6 text-2xl">
        <button
          // onClick={(event) => {
          //   checkTodo();
          // }}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <MdCheckBoxOutlineBlank />
          <div className="absolute inset-0">
            {pulses.map((pulse) => (
              <span
                key={pulse.id}
                className="absolute block w-8 h-8 bg-zinc-500 rounded-full animate-pulse-radial"
                style={{
                  top: pulse.y - 16, // Center the pulse at the click point
                  left: pulse.x - 16,
                }}
              ></span>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}
