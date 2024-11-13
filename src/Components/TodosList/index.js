import "./index.css" 
import { MdDelete } from "react-icons/md"; 
const Todo = (props)=>{
    const {todoDetails, onDelete, modifyTodo, onAddName} = props 
    const {id} = todoDetails 
    

    const onClickDelete =()=>{
        onDelete(id)
    }
    

    const onChangeTodo =(event)=>{ 
        const todoName = event.target.value
        onAddName(todoName, id)
    }
    

    return (
        <div key={id} className="todo-items-container">
            <input type="checkbox" className="input-field"/>
            <input type="text" className="todo-input" onChange={onChangeTodo} placeholder="Enter Your Todo"></input>
            <MdDelete onClick={onClickDelete} />
        </div>
    )
}


export default Todo