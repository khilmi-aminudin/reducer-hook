import React,{useReducer} from 'react'

const initailState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initailState
        default:
            return state
    }
}

function CounterThree() {
    const [count,dispatch] = useReducer(reducer,initailState)
    const [countTwo,dispatchTwo] = useReducer(reducer,initailState)
    return (
        <div>
            <h1>Count - {count} </h1>
            <button onClick = {() => dispatch('increment')} >Increment</button>
            <button onClick = {() => dispatch('decrement')} >Decrement</button>
            <button onClick = {() => dispatch('reset')} >Reset</button>
            <h1>Count - {countTwo} </h1>
            <button onClick = {() => dispatchTwo('increment')} >Increment</button>
            <button onClick = {() => dispatchTwo('decrement')} >Decrement</button>
            <button onClick = {() => dispatchTwo('reset')} >Reset</button>
        </div>
    )
}

export default CounterThree
