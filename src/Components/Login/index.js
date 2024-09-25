import {Component} from "react" 
import {Link, redirect, Navigate} from "react-router-dom";
import "./index.css" 

class Login extends Component { 
      state={isLoggedIn:"",userName:"", password:"", isErr:false}
     
    onChangeName =(event)=>{ 
        this.setState({userName:event.target.value, isErr:false})
        


    }
    onChangePassword =(event)=>{ 
        this.setState({password:event.target.value, isErr:false})
        

    } 
    onSubmitSuccess=(msg)=>{
        //const navigate = Navigate()
        this.setState({isErr:false, isLoggedIn:true}) 
        
        
    }
    onSubmitFailure=()=>{ 
        this.setState({isErr:true, isLoggedIn:false})

    }
    userLogin=(event)=>{
        event.preventDefault() 
        const {userName, password}=this.state
        
        const isNameValid = userName.length > 0 
        const isPasswordValid = password.length >= 5 
        if (isNameValid && isPasswordValid){
            this.onSubmitSuccess() 
          
        }
        else{
            this.onSubmitFailure() 
        }

    }

    render(){ 
      const {userName, password, isErr, isLoggedIn} = this.state
        // console.log(password.length) 
         if (isLoggedIn === true){
            return <Navigate to="/home" />
         }
        return (
            <div className="login-container">
            <form onSubmit={this.userLogin} className="form-container">
                <div className="input-container">
                <lable htmlFor="name">UserName</lable>
                <input type="text" id="name" className="input-element" onChange={this.onChangeName} placeholder="Enter your name" value={userName}/> 
                </div> 
                <div className="input-container">
                <lable htmlFor="password">Password</lable>
                <input type="password" id="password" className="input-element" onChange={this.onChangePassword} placeholder="Enter atleast 5 characters" /> 
                </div> 
                <button type="submit" className="submit-btn">Submit</button>
                <p>{isErr? "*Invalid input": ""}</p>

            </form>
            </div>
        )
    }
}

export default Login 