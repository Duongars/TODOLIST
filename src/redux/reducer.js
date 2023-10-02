import * as types from './actionTypes';
import {v4 as uuidv4} from 'uuid';
const initState = {
todos:[{id:1,task:'đi chơi',completed:false}]

};

const todosReducer = (state=initState,action) => {
    switch (action.type) {
        case types.ADD_TODO :
            const newTodo = {
                id:uuidv4(),
                task:action.payload,
                completed:false
            };

            return {
                ...state,
                todos:[...state.todos,newTodo]
            }


        case types.COMPLETE_TODO:
            const toggleTodos = state.todos.map( e => 
                e.id===action.payload.id ? {...action.payload,completed:!action.payload.completed}:e)
            return {
                ...state,
                todos:toggleTodos
            }
    
            case types.REMOVE_TODO:
            const removeTodo = state.todos.filter(todo => todo.id!=action.payload.id)
            return {
                ...state,
                todos:removeTodo,
            }

                case types.UPDATE_TODO:
              const updateTodo = state.todos.map(todo => todo.id===action.payload.id ? {...todo,task:action.payload.task}:todo)      
                return {
                    ...state,
                    todos:updateTodo,
                }
        default:
           return state
    }


}

export default todosReducer