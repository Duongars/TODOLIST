import React from 'react'
import NewTodoInput from './NewTodoInput';
import NewTodo from './NewTodo';
import "./TodoList.css";
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { completoTodo, addTodo,removeTodo,updateTodo } from '../redux/action';
function NewTodoList() {
    
    const state = useSelector ( state => ({...state.todos}))
    const create =(newTodo) =>{
        dispatch(addTodo(newTodo))
    }

    const update = (updatedTodo)=> {
        dispatch(updateTodo(updatedTodo))

    }
    let dispatch = useDispatch();
  return (
<div className='TodoList'>
        <h1>To do App with Redux</h1>
        <NewTodoInput
        createTodo={create}
        />
        <ul>
    <TransitionGroup className='todo-list'>

    {state.todos && state.todos.map( todo => {
        return (
<CSSTransition key={todo.id} classNames="todo">
<NewTodo 
 key ={todo.id}
 todo={todo}
//  id ={todo.id}
//  task={todo.task}
//  completed={todo.completed}
 toggleTodo={()=>dispatch(completoTodo(todo))}
 removeTodo={()=>dispatch(removeTodo(todo))}
 update={update}
/>

</CSSTransition>

        )
    })}
    </TransitionGroup>

        </ul>
    </div>
  )
}

export default NewTodoList