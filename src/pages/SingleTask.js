import './SingleTask.scss'
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { EDIT_TASKS } from '../redux/actions/actions';
import { taskSelector } from "../redux/taskReducer/selector";
import { Button } from '@mui/material';

const SingleTask = () => {
    const dispatch = useDispatch();
    const taskArr = useSelector(taskSelector);
    const navigate=useNavigate();
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
        dispatch({ type: EDIT_TASKS, payload: obj })
        setshowForm(!showForm);
    }

    return (
        <>
        <div className='task-single'>

            <div className='task-single-header'>
                Date: {showTask.data}
            </div>
            <div className='task-single-text'>
                {!showForm && (
                    <div onClick={() => setshowForm(!showForm)}>{text}
                    </div>
                )}
                {showForm && (
                    <form onSubmit={editTask}>
                        <input placeholder={text} onChange={(e) => setText(e.target.value)} />
                    </form>
                )}
            </div>
            <div className='task-single-cat'>

                <div>  Deadline:   {showTask.deadline}  </div>
                <div>
                    Category:  {showTask.category}
                </div>
            </div>
        </div>
        <Button variant="outlined" onClick={() => {          
              navigate(-1)}}>Назад</Button>
      
        </>
    );
};

export default SingleTask;