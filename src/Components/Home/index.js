import {Component} from "react" 
import {useHistory, Redirect, Navigate} from "react-router-dom"
import { v4 as uuid} from "uuid" 
import Cookies from 'js-cookie' 
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import Todo from "../TodosList"
import "./index.css" 

class Home extends Component { 
  state={isLogout:false, todoLists:[], userName:"", showProfile:false}

     onChangeTodo=(event)=>{
         this.setState({todo:event.target.value})
     } 
     onAddName=(name, id)=>{
      const {todoLists}=this.state 
      const updatedTodoList = todoLists.map(each => {
        if (each.id === id){
          return ({
           name : name,
           id : each.id
          })
        }
        else{
          return each
        }
      }) 

      this.setState({todoLists:updatedTodoList})

     }

     onClickAdd=()=>{
      const id = uuid() 
      const newTodo = {
        name:"",
        id:id

      } 
      this.setState(prevState => ({
        todoLists: [...prevState.todoLists, newTodo]
        
      }))
      

     }
     onDelete=(id)=>{ 
     // console.log(id)
      const {todoLists}=this.state 
      const updatedList = todoLists.filter(each => each.id !== id) 
      this.setState({todoLists:updatedList})
     }

     onLogout=()=>{
      Cookies.remove('password')
      Cookies.remove('userName')
      this.setState({isLogout:true, userName:""})
     }

     onClickProfile=()=>{
      const name = Cookies.get('userName')
      this.setState({userName:name})
      this.setState(prevState => ({showProfile:!prevState.showProfile}))
     }
      render(){
        const {isLogout, todoLists, showProfile, userName}=this.state 
        // console.log(userName) 
         
        const password = Cookies.get('password')
           if ( password === undefined && isLogout===true) {
           return <Navigate to="/login" />
            }
        return (
          <div className="home-bg-container">
              <div className="profile-container" onClick={this.onClickProfile}>
              <IoPersonCircleSharp className="profile-img" size={60}/>
              {showProfile&& <div >
                <p>{userName}</p>
                <div className="profile-logout-btn">
                  <FaArrowLeftLong />
                <button onClick={this.onLogout} className="btn">
                  Logout 
                </button>
                </div>
                </div>}

                </div>
                <h1 className="heading">Task-Master</h1> 
                
                <div className="btns-container">
                  <div className="logout-btn-container">
                  <FaArrowLeftLong />
                <button onClick={this.onLogout} className="logout-btn">
                  Logout 
                </button>
                </div>
                  <button onClick={this.onClickAdd} className="add-btn">Create New Todo</button>
                  </div>
                  {todoLists.map(eachTodo => { 
                  return(
                    <Todo todoDetails={eachTodo}  onDelete={this.onDelete} onAddName={this.onAddName} key={eachTodo.id}/>
                  )
                 
                })}
                </div>
                

                
            
        )
      }
}

export default Home 
