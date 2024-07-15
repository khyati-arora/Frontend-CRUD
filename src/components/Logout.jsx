import { useContext ,useState} from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
const Logout = ()=>{

  const [success,setSuccess] = useState(true)
  const {isAuth , setAuth} = useContext(UserContext);
  localStorage.removeItem("accessToken");
  setAuth(false)
  
  return (
    <div>
        {
            success == true && <Navigate to = "/"/>
        }
    </div>
    
  )
}
export default Logout;