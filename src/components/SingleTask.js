import React, { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { EDIT_TASKS } from '../redux/actions/actions';
import { taskSelector } from "../redux/taskReducer/selector";

const SingleTask = () => {
    const dispatch = useDispatch();
    const taskArr=useSelector(taskSelector);    
    const { id } = useParams();
    const showTask = taskArr.find(task => task.id === Number(id));
    const [text, setText] = useState(showTask.text);
    const [showForm, setshowForm] = useState(false);
   
  
    const editTask = (e) => {
        e.preventDefault()
        const obj = {
            id: Number(id),
            text: text
        }
        dispatch({type: EDIT_TASKS, payload: obj})
        setshowForm(!showForm)
    }
    return (
        <div>
            Single task
            <div className='task-header'>
                <div>
                  Date of creation</div>
                  <div>
                  Task text                
                </div>
                <div>
                  Category               
                </div>
                <div>            
                </div>
                <div></div>
               
             </div>
          
            <div className='task-string'>
           <div>{showTask.data}</div>
                <div onClick={()=>setshowForm(!showForm)}>{text}          
                </div>
                {showForm && (
                    <form onSubmit={editTask}>
                    <input placeholder={text} onChange={(e) => setText(e.target.value)} />
                    </form>
                )}
                <div>{showTask.category}</div>
                <div>{showTask.deadline}</div>

            </div>
      
        </div>
    );
};

export default SingleTask;