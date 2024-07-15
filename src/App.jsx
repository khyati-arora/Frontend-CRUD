import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import { useState } from "react";

function App() {
  
  const[auth,setAuth] = useState(localStorage.getItem("accessToken")!=null);
  return (
    <UserContext.Provider value = {{isAuth : auth , setAuth}}>
       <Outlet/>
    </UserContext.Provider>
    
  )
}

export default App;




