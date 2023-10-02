import React, { useState } from 'react';
import './Todo.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Todo = ({ todo, toggleTodo, removeTodo,update }) => {
 const   { id, task, completed} = todo
    const [isEditing, setisEditing] = useState(false);
    const [updatedTask, setupdatedTask] = useState(task);
    const handleUpdate =(e) =>{
        e.preventDefault()

       let updateTodo ={
        id:id,
        task:updatedTask,
        completed:completed,
       }

       console.log(updateTodo);
       update(updateTodo)
       setisEditing(false)
    }
    return (
        <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
            {isEditing ? (
                <CSSTransition key='editing' timeout={500} className='form'>
                    <form className="TodoInput" onSubmit={handleUpdate}>
                        <input
                            type="text"
                            placeholder="Enter your task ....."
                            id="task"
                            name="task"
                            value={updatedTask}
                            onChange={e => { setupdatedTask(e.target.value) }}
                        />
                        <button>Save</button>
                    </form>
                </CSSTransition>
            ) : (
                <CSSTransition key='normal' timeout={500} classNames='task-text'>
                    <li className='Todo-task' onClick={toggleTodo}>
                        {task}
                    </li>
                </CSSTransition>
            )}

            <div >
                <button onClick={()=>{setisEditing(true)}}> <i className='fas fa-pen' /> </button>
                <button onClick={removeTodo}> <i className='fas fa-trash' /> </button>
            </div>

        </TransitionGroup>
    );
};

export default Todo