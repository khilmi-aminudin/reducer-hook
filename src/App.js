import React,{useReducer} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext()

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

function App() {
  const [count, dispatch] = useReducer(reducer,initailState)
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h1>count : {count}</h1>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
