import { useEffect, useState } from "react";
import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {    
    setTasks([...tasks,task]);
  }

  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear All</button>
    </div>    
  )
}
export default App;