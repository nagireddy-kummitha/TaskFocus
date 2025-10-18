import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
     newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  const clearAll = () => {
    setTasks([]);
  }

  return(
    <div className="App">
      <header>
      <h1 className="title">Task Focus</h1>
      <p className="tagline">Our friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker />
      {tasks.length == 0 ? !(<button className="clear-btn" onClick={clearAll}>Clear the task</button>) : tasks.length == 1 ?
      (<button className="clear-btn" onClick={clearAll}>Clear the task</button>) :
      (<button className="clear-btn" onClick={clearAll}>Clear all tasks</button>)}
    </div>
  )
}