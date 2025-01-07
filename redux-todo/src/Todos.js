import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from './features/todo/todoSlice';
export default function Todos (){
    const todos = useSelector(state=> state.todos);
    const dispatch = useDispatch();
    return (
        <>
        <div>
            <ul>
                {todos.map((todo)=>(
                    <div key={todo.id}>
                    <li >
                        {todo.text}
                    </li>
                    <button onClick = {() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>
                )
                )}
            </ul>
        </div>
        </>
    )
}