import { FaTimes} from 'react-icons/fa'
import { BsFillCircleFill } from "react-icons/bs";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className ='task' >
        <h4>{task.reminder == true?<BsFillCircleFill style ={{color: 'green'}} onClick={() => onToggle(task.id)} />: 
        <BsFillCircleFill style ={{color: 'red'}} onClick={() => onToggle(task.id)} /> }</h4>
        <h3>{task.text} <FaTimes style ={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
        <p>{task.day} </p>
    </div>
  )
}

export default Task