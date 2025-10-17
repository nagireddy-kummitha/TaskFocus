import React, { useState } from 'react'

export default function Taskform({addTask}) {

  const [task, setTask] = useState('');
  const [priority,setPriority] = useState('medium');
  const [category, setCategory] = useState('general');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, category, completed: false});

    //reset
    setTask('');
    setPriority('medium');
    setCategory('general');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input value={task} type="text" placeholder='Enter the Task' 
            onChange={(e) => setTask(e.target.value)}/> {/*to get the text from text box */}

            <button type='submit'>Add Task</button>
        </div>
        <div>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium" selected>Medium</option>
                <option value="low">Low</option>
            </select>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>

    </form>
  )
//   Git init 
// Git remote –v 
// Git remote add origin url 
// Git add . 
// Git commit –m “message” 
// Git branch 
// Git branch –M main 
// Git push origin main 
// Git push origin main - -force
}
