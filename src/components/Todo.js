import React, { useState } from "react";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineFullscreen } from "react-icons/ai";
import { RiCalendarTodoLine } from "react-icons/ri";


const ToDo = ({ text, done, updateMode, deleteToDo, handleClick, doneTask }) => {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <div className="todo">
        {done ? (
          <RiCalendarTodoLine   size={30} color="white" onClick={doneTask} style={{ cursor: 'pointer' }} />
        ) : (
          <RiTodoLine  size={30} color="white" onClick={doneTask} style={{ cursor: 'pointer' }} />
        )
        }
        <div className="text" style={{ textDecoration: done ? "line-through" : "none" }}> {text}</div>
        <div className="icons">
          <AiOutlineFullscreen onClick={handleClick} size={30} />
          <span className="material-symbols-outlined" onClick={updateMode}>edit</span>
          <span className="material-symbols-outlined" onClick={deleteToDo}>delete</span>
        </div>
      </div>
    </>
  );
};

export default ToDo;
