import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:'Hello!'}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload            
            }
           
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((item)=>(
                item.id !== action.payload

            ))

        },
        editTodo:(state,action)=>{
            const{id,newText} = action.payload;
            const todo = state.todos.find(todos=> todos.id===id)
            if(todo){
                todo.text=newText;
            }
        }
    }
});

export const {addTodo,removeTodo,editTodo}= todoSlice.actions;

export default todoSlice.reducer