import * as types from './actionTypes';


export const completoTodo = todo => ({
    type:types.COMPLETE_TODO,
    payload:todo
})

export const addTodo = newTodo => ({
    type: types.ADD_TODO,
    payload:newTodo,

})

export const removeTodo = todo =>({
    type: types.REMOVE_TODO,
    payload:todo,
})

export const updateTodo = todo =>({
    type: types.UPDATE_TODO,
    payload:todo,
})