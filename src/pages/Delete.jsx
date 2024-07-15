import { useEffect,useState } from "react";
import { useParams} from "react-router-dom"
import { base_api_url } from "../constant.js";
import { useNavigate } from "react-router-dom";

const Delete = ()=>{
    const {id} = useParams();
    const url =  base_api_url + id;
    const token = 'Bearer ' + localStorage.getItem('accessToken');
    const [success,setSuccess] = useState("");
    const navigate = useNavigate();

    const getResponse = async()=>{
        
        const confirmBox = window.confirm(
            "Do you really want to delete this user?"
          )
        if(confirmBox == true){
            const response = await fetch(url, {
                method: 'DELETE',
                headers : {
                    Authorization : token
                }
            })

            const result = await response.text();
            console.log(result);
            setSuccess(result);
        }
        else{
            setSuccess("Delete failed")
        }   
    }

    useEffect(()=> {
       getResponse();
       setTimeout(()=> navigate("/users"),2000)
    },[])

    return (
        <div>
            {success === "Deleted Successfully" && (
                <p>Item with ID {id} deleted successfully.</p>
            )}
            {success === "Delete failed" && (
                <p>Delete request cancelled</p>
            )   
            }
        </div>
    )

}

export default Delete;