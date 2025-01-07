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
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoIndex = state.todos.findIndex((todoItems) => todoItems.id === id);
          
            if (todoIndex !== -1) {
              state.todos[todoIndex].text = text; // Update the text
            }
          },
    }
});

export const {addTodo,removeTodo,editTodo}= todoSlice.actions;

export default todoSlice.reducer