import {Component} from "react" 
import {useHistory} from "react-router-dom"
import { v4 as uuid} from "uuid" 
import { MdDelete } from "react-icons/md";
import "./index.css" 

class Home extends Component { 
  state={isTrue:false, todo:"", todoLists:[]}

     onChangeTodo=(event)=>{
         this.setState({todo:event.target.value})
     } 

     onClickAdd=()=>{
      const {todo}=this.state 
      const id = uuid() 
      const newTodo = {
        name:todo,
        id:id

      } 
      this.setState(prevState => ({
        todoLists: [...prevState.todoLists, newTodo]
        
      }))
      this.setState({todo:""})
     

     }
     onDelete=(id)=>{ 
      console.log(id)
      const {todoLists}=this.state 
      const updatedList = todoLists.filter(each => each.id !== id) 
      this.setState({todoLists:updatedList})
     }
      
      render(){
        const {isTrue, todoLists, todo}=this.state 
        console.log(todoLists)
        return (
            <div className="home-bg-container">
                <h1 className="heading">Task-Master</h1> 
                <div>
                <input type="text" onChange={this.onChangeTodo} value={todo} className="todo-entry-element" placeholder="Add your new todo"/>
                <button onClick={this.onClickAdd} className="add-btn">Add Todo</button>
                {todoLists.map(eachTodo => { 
                  return(
                    <div key={eachTodo.id} className="todo-items-container">
                    <input type="checkbox" className="input-field"/>
                    <h1 className="todo">{eachTodo.name}</h1> 
                    <MdDelete onClick={()=>this.onDelete(eachTodo.id)}/>
                    </div>
                  )
                 
                })}
                </div>
                
            </div>
        )
      }
}

export default Home 
