import { useState, useEffect } from "react"

function App() {

  return (
    <center>
      <div>
            <h1>Counter</h1>
       </div>
       <Counter></Counter>
    </center>
  )
}


// Mounting , re-rendering , unmounting.
function Counter(){

const [count , setCount] = useState(0)
// hooking into the lifecycle events of react.

const [running, setRunning] = useState(false)

// start/stop the timer using a top-level effect and a cleanup
useEffect(() => {
  if (!running) return;
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(id);
}, [running]);

  
// Old Method.....

  // function IncreaseCount(){
  //   const el = document.getElementById("counter");
  //   const txt = el.innerText;
  //   const value = parseInt(txt, 10) + 1;
  //   el.innerText = value;
  // }

  return(
    <div>
      <h1 id="counter">{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase Count </button>
      <button onClick={()=>{setCount(count-1)}}>Decrease Count </button>
      <button onClick={()=>{setCount(0)}}>Reset Count </button>
      <button onClick={()=>{setRunning(true)}}>Start Timer </button>
      <button onClick={()=>{setRunning(false)}}>Stop Timer </button>
    </div>

  )
}

export default App
