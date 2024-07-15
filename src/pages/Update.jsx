import {  useState } from "react";
import { Navigate, useParams} from "react-router-dom"
import { base_api_url } from  "../constant.js";


const Update = ()=>{
    const {id} = useParams();
    const url = base_api_url + "update/" + id;
    const token = 'Bearer ' + localStorage.getItem('accessToken');
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [success,setSuccess] = useState(false);
    

    const getResponse = async(e)=>{
        e.preventDefault(); 

        const formData = {
            username : username,
            password: password,
            role: role
        };
        const response = await fetch(url, {
            method: 'PUT',
            headers : {
                Authorization : token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          })

          const result = await response.text();
          console.log(result);
          alert("user updated successfully");
          setSuccess(true);
    }
    
    return (
        <div>
            <h1>User Details</h1>
            {success != true && (<form onSubmit={getResponse}>
                <input type="text" placeholder="Enter username" value = {username }onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <br/>
                <input type="text" placeholder="Enter password" value = {password }onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <br/>
                <input type="text" placeholder="Enter role" value = {role}onChange={(e)=>setRole(e.target.value)}/>
                <br/>
                <br/>
                <button type = "submit">Submit</button>
            </form>)}
             {
                success == true && (
                    <Navigate to = "/users"/>
                )
             }
        </div>
    )

}

export default Update;