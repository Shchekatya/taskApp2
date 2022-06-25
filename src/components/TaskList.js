import './TaskList.scss';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TASKS, SORT_TASKS } from "../redux/actions/actions";
import { taskSelector } from "../redux/taskReducer/selector";
import { useState } from 'react';


const TaskList = () => {
  const taskArr = useSelector(taskSelector); 
  const [directionSort, setDirectionSort] = useState(true);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch({
        type: DELETE_TASKS,
        payload: id
    })
  };

  const sortTask = (sort) => {   
    const obj ={
      sort: sort,
      ab: directionSort,
    } 
      dispatch({
        type: SORT_TASKS, 
        payload: obj
    })       
    setDirectionSort(!directionSort) 
  }
  
    return (
        <div className='task-list'>
          <h3>Your task list</h3>
            <div className='task-header'>
                <div onClick={()=>sortTask('date')}>
                  Date of creation</div>
                <div onClick={()=>sortTask('text')}>
                  Task text                
                </div>
                <div onClick={()=>sortTask('category')}>
                  Category               
                </div>
                <div onClick={()=>sortTask('deadline')}>Deadline              
                </div>
                <div></div>
               
             </div>
          {taskArr.map(task => (
             <div key={task.id} className='task-string'> 
                <div>{task.data}</div>
                <div>{task.text}</div>
                <div>{task.category}</div>
                <div>{task.deadline}</div>
                    <button className='del-button' onClick={() => deleteTask(task.id)}>+</button> 
               
             </div>
          ))}
        </div>
    );
};

export default TaskList;