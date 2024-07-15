import { useParams , Link , useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { base_api_url } from "../constant.js";
const User = ()=>{
    
    const { id } = useParams();
    const[user , setUser] = useState(null);
    const navigate = useNavigate();
    const url = base_api_url + "users/" + id
    const token = 'Bearer ' + localStorage.getItem('accessToken');
    const fetchUsers =  async() => {
        try{
        const response = await fetch(url , {headers : {
            Authorization : token
        }});
        console.log("data fetched");
        const data = await response.json();
        setUser(data);
      }catch(err){
        alert("Access not Allowed");
        setTimeout(()=>navigate("/users"),2000);
      }
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    
    return (
         (user != null && user.id!=null)?
         <div>
            {user.id}
            <br/>
            {user.username}
            <br/>
            <Link to={"/update/" + user.id}><button>Update details</button></Link>
            <br/>
            <br/>
            <Link to={"/delete/" + user.id}><button>Delete details</button></Link>
         </div> : <div>"Access not allowed"</div>
    )
}

export default User;