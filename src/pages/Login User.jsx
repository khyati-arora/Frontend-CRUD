import { useState, useContext} from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { base_api_url } from "../constant.js";
const Login = ()=>{

  const [username, setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [success,setSuccess] = useState(false)
    
  const url = base_api_url + "authenticate"
  const {isAuth , setAuth} = useContext(UserContext);
  const handleSubmitLogin = async(e)=>{
    e.preventDefault();
    const formData = {
      username : username,
      password: password,
      role: 'User'
  };
  const response =  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
   
  const data = await response.json();
  localStorage.setItem("accessToken",data.accessToken);
  setSuccess(true)
  setAuth(true)
  }
  return <div>
          <h2>Login User</h2>
          <form onSubmit={handleSubmitLogin}>
            <input type="text" placeholder="Enter username" value = {username}onChange={(e)=>setUserName(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" placeholder="Enter password" value = {password}onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button type = "submit">Submit</button>
          </form> 
          {
            success == true ? <Navigate to = "/"/> : <div/>
          }
    </div>
}

export default Login;