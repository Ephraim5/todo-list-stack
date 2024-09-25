import {  useState } from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useLocation,useNavigate } from 'react-router-dom';

function View() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const location = useLocation();
    const { name, id, note,done } = location.state || {};
    setTimeout(() => {
        setShow(true)
    }, 4000)

    function goBack(){
        navigate('/Home');
    }


    return (
        <div className="App">
            <div
                className="container m-auto card p-5 mt-5"
                style={{ height: "600px", color:"white"}}
            >
                <h1>ToDo App</h1>
                <AiOutlineFullscreenExit size={30} onClick={goBack}style={{cursor:"pointer"}} />
               <div className="textBox" style={{textDecoration: done ? "line-through" : "none"}}>
                {note}
               </div>


            </div>
        </div>
    );
}

export default View;
