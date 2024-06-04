 import React, { useState } from 'react'

export default function Tasks() {
    const [task, setTask] = useState([]);
    const [newtask,SetNewTask] = useState('');
    const addtask= () => {
       setTask(
        [ ...task,{name:newtask, }]        
       )
    }
    
    const newtask1="bike";
    const task1=["car", "bike"];
      

  return (
    <div>
      <input type="text"  onChange={(e)=>SetNewTask(e.target.value)} placeholder='add a new Task' />
      
      <button onClick={addtask}> addtask</button>
      
      {
      task.map((item) => (
        <div>
        <h1>{item.name}</h1>
        <button>Remove</button>
        </div>
      )
    )
    }
      

    </div>
  )
}
