import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { taskSelector } from "../redux/taskReducer/selector";

const SingleTask = () => {
    const taskArr=useSelector(taskSelector);    
    const { id } = useParams();
    const showTask = taskArr.filter(task => task.id === Number(id))
    console.log(id)

    console.log(showTask)
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
           {showTask.map((task) => (
            <div key={task.id} className='task-string'>
           <div>{task.data}</div>
                <div>{task.text}</div>
                <div>{task.category}</div>
                <div>{task.deadline}</div>

            </div>
           ))} 
        </div>
    );
};

export default SingleTask;