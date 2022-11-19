import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { minusCounter, plusCounter } from './Store/Actions/action';

function App() {
  // let [Counter, setCounter] = useState(0)
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counterReducer);
  const addCounter = () => {
    dispatch( plusCounter() )
  }
  const subCounter = ()=>{
    dispatch(minusCounter())
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div >
        <button  onClick={addCounter}>+</button>
        <h4 >{selector.counter}</h4>
        <button onClick={subCounter}>-</button>
      </div>
    </div>
  );
}

export default App;
