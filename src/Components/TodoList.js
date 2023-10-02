import React from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';
import "./TodoList.css";
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { completoTodo, addTodo,removeTodo,updateTodo } from '../redux/action';
const TodoList = () => {

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
        <TodoInput
        createTodo={create}
        />
        <ul>
    <TransitionGroup className='todo-list'>

    {state.todos && state.todos.map( todo => {
        return (
<CSSTransition key={todo.id} classNames="todo">
<Todo 
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

export default TodoList