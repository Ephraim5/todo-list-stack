import React, { useState } from 'react';
import wave from "../wave.gif"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Signup() {
    var id =localStorage.getItem("todolistStackId");
    const navigate = useNavigate();
   async function submit(){   
    if(id == null || id == undefined || id == ""){
         var uid = uuidv4();
         localStorage.setItem("todolistStackId",uid)
         navigate('/Home',{state:uid});
    }else{
        navigate('/Home',{state:id});
    }  
    }
    return (
        <div className="App">
            <div
                className="container m-auto card p-4 mt-5"
                style={{ height: "600px", color: "white" }}
            >
                <h1>ToDo App Stack</h1>
                <div className="textBox2" >
                  <img style={{ width: 180, height: 180,}}  src={wave} />
                  <h1>Welcome!!</h1>
                </div>
             
                <div className="top mt-3 d-flex justify-content-center gap-1 ">

                    <button type="button" onClick={submit} className="btn btn px-4" style={{ background: 'black', color: 'white' }} >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Signup;