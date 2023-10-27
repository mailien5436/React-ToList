import React, { useState } from "react";
import { UseSelector, UseDispatch } from "react-redux/es/hooks/useSelector";
import { add } from "../reducers/taskSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function AddTask(){
    const taskName=useRef();
    const [input, setinput]=useState(null);
    const dispatch=useDispatch();

    const addTask=()=>{
        dispatch(add(taskName.current.value));
    }
    return(
        <>
        <div className="add-task">
            <label>Task name:</label>
            <input type="text" placeholder="Input name of task" ref={taskName} />
            <button onClick={addTask}>Add</button>
        </div>
        </>
    )

}
export default AddTask;