import './Tasks.scss'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASKS } from '../redux/actions/actions';
import TaskList from '../components/task-list/TaskList';
import Dropdown from '../components/drop-down/Dropdown';

const Tasks = () => {
    const [selected, setSelected] = useState('Category')
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');
    const dispatch = useDispatch();
    const clearState = () => {
        setText('')
        setDeadline('')
    }

    const addTask = (e) => {
        e.preventDefault()
        const obj = {
            id: Date.now(),
            data: new Date().toISOString().split('T')[0],
            category: selected,
            text: text,
            deadline: deadline,
        }
        dispatch({ type: ADD_TASKS, payload: obj })
        clearState()
        e.target.reset();
        console.log(e.target)
    }


    return (
        <div>
            <h3>Add new task</h3>
            <form onSubmit={addTask}>
                <textarea placeholder='Task text' onChange={(e) => setText(e.target.value)} />

                <Dropdown selected={selected} setSelected={setSelected} />

                {/* <select  onChange={(e) => setCategory(e.target.value)}>
              {categoryArr.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
              ))}            
              </select> */}


                {/* <select  onChange={(e) => setCategory(e.target.value)}>
                    <option value="job">Job</option>
                    <option value="home">Home</option>
                    <option value="hobby">Hobby</option>
                </select> */}
                <input type="date" onChange={(e) => setDeadline(e.target.value)} />
                <button className='add-button' type='submit'>add new task</button>
            </form>

            <TaskList />
        </div>
    );
};

export default Tasks;