import { useEffect, useState } from "react";
import ToDo from "./Todo";
import { addToDo, getAllToDo, updateToDo, deleteToDo ,doneTask} from "../utils/HandleApi";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [done,setDone] = useState(false)
  const navigate = useNavigate();
  const doneFun = (id) =>{
    setDone(!done)
    doneTask(id, done,setToDo)
  }

  const handleClick = (id,text,done) => {
    const data = {
      name: 'John Doe',
      done:done,
      id: id,
      note:text,
    };
    navigate('/view', { state: data });
  };
  const [filteredToDo, setFilteredToDo] = useState([]);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  useEffect(() => {
    getAllToDo(setToDo);
    var id =localStorage.getItem("todolistStackId");
    if (toDo.length > 0) {
      const myTodo = toDo.filter((item) => item.id == id);
      setFilteredToDo(myTodo);
    }
  }, [toDo]); 


  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div
        className="container m-auto card p-5 mt-5"
        style={{ height: "600px" }}
      >
        <h1>ToDo App</h1>

        <div className="top mt-3 d-flex justify-content-center gap-1 ">
          <input
            type="text"
            placeholder="What Todo Is On Your Mind ?..."
            value={text}
            onChange={(e)=> setText(e.target.value)}
          />

          
          <button type="button" className="btn btn px-4" style={{background:'black',color:'white'}} onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text,done, setText, setToDo) 
            }>{isUpdating ? "Update" : "Add"}</button>
        </div>
        <div className="room">
        <div className="listed">
          {filteredToDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              done={item.done}
              doneTask={() =>doneFun(item._id)}
              handleClick={() => handleClick(item._id,item.text,item.done)}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
        </div> 
      </div>
    </div>
  );
}

export default Home;
