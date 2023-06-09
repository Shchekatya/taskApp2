import './Dropdown.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ADD_CATEGORY } from '../../redux/actions/actions';
import { categorySelector } from '../../redux/categoryReducer/selector';


function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const [addActive, setAddActive] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const categoryArr = useSelector(categorySelector);
    const dispatch = useDispatch();

    const addCategory = (e) => {
        e.preventDefault()
        if (newCategory !== '') {
            const cat = {
                id: Date.now(),
                name: newCategory
            }
            dispatch({ type: ADD_CATEGORY, payload: cat })
            setNewCategory('');

            console.log(e.target)
        }

    }

    return (

        <div className='dropdown'>
            <div className='dropdown-btn'
                onClick={(e) => setIsActive(!isActive)}>
                {selected}
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {categoryArr.map((cat) => (
                        <div key={cat.id} onClick={(e) => { setSelected(cat.name); setIsActive(false); }}
                        >
                            <span> {cat.name}</span>
                        </div>
                    ))}
                    <div onClick={(e) => setAddActive(!addActive)} className='dropdown-content-plus'>
                    </div>
                    {addActive && (
                        <div className='dropdown-content-plus-form'>
                            <input placeholder='Add category' onChange={(e) => setNewCategory(e.target.value)} />
                            <button onClick={addCategory} >Add new category</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;