import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo(){
const [input,setInput] = useState('');
const dispatch = useDispatch();

const addTodoHandler = (e)=>{
    e.preventDefault();
    console.log('add value', input)
    dispatch(addTodo(input));
    setInput('');
}

    return(
        <form onSubmit={addTodoHandler} >
            <input placeholder="Add a todo" onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <button type='submit'>Add</button>
        </form>
    )
}