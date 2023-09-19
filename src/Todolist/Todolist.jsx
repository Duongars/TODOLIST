import React, { useReducer, useRef } from 'react'

const initState = {
    job: "",
    jobs: []
}

const ADD_JOB = "add_job"
const SET_JOB = "set_job"
const DELETE_JOB = "delete_job"

const reducer = (state, action) => {
    let newState

    switch (action.type) {
        case SET_JOB:
            newState = { ...state, job: action.payload }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
            break;
        case DELETE_JOB:
            let newJobs = [...state.jobs]
            newJobs.splice(action.payload,1) 
            newState = { ...state,jobs:[...newJobs] }

            break;

        default:
            break;
    }
    return newState
}

const setjob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}
const addjob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deletejob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}



// funtion render
function Todolist() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state;
    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addjob(job))
        dispatch(setjob(""))
        inputRef.current.focus()
    }


    return (
        <div>
            <h1>TO DO LIST</h1>
            <input type="text"
            ref={inputRef}
                value={job}
                onChange={e => dispatch(setjob(e.target.value))}
            />
            <button onClick={handleSubmit}>ADD JOB</button>
            <ul>
                {jobs.map((job, index) => <li key={index}>{job}
                <span onClick={e => dispatch(deletejob(index))}>&times;</span>
                </li>)}

            </ul>
        </div>
    )
}

export default Todolist