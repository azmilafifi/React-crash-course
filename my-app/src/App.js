//main 
import { useState } from "react"
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import React from 'react'
import AddTask from './Components/AddTask'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }    

] )

  //Add Task

  const addTask = (task) => {
    console.log(task)
    
  }
   

  //Delete Task

  const deleteTask = (id) => {
    console.log('delete', id)     
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder

  const toggleReminder = (id) => {
    console.log('reminder', id)
    setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd= {addTask}/>
      {tasks.length > 0? <Tasks tasks= {tasks} onToggle = {toggleReminder} onDelete={deleteTask} /> : 'No Tasks to show' }
    </div>
  )
}
 


//Class
// class App extends React.Component {
//   render() {
//     return <h1>Hello from the class method</h1>
//   }
// }
export default App;
