import { useState } from "react";
import { Navigate } from "react-router-dom";
import { base_api_url } from "../constant.js";
const Add = ()=> {

    const [username, setUserName] = useState("");
    const [password , setPassword] = useState("");
    const [ success,setSuccess ] = useState(false);  
    const url = base_api_url + "signup"
 
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        const formData = {
            username : username,
            password: password,
            role: "User"
        };
        const response =  await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        setSuccess(true);
      };

  return <div>
            <h2>Signup User</h2>
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter username" value = {username }onChange={(e)=>setUserName(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Enter password" value = {password }onChange={(e)=>setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                    <button type = "submit">Submit</button>
              </form>
              {
                success == true ? <Navigate to = "/login"/> : <div/>
              }
          </div> 
}

export default Add;