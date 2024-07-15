import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import User from "../components/User.jsx";
import Delete from "../pages/Delete.jsx";
import Add from "../pages/Signup User.jsx"
import Login from "../pages/Login User.jsx"
import Update from "../pages/Update.jsx";
import Protected from "../layouts/protected.jsx";
import Users from "../pages/Users.jsx";
import Public from "../layouts/Public.jsx";
import Logout from "../components/Logout.jsx"
import App from "../App.jsx";

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <App/>, // show component for particular path
      errorElement: <Home />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Home/>
        },
        { 
          path: "/",
          element: <Public/>,
          children : [
          {
            path: "/login",
            element : <Login/>
          },
          {
            path:"/add",
            element: <Add/>
          },
        ]
        },
        {
          path: "/",
          element: <Protected/>,
          children : [{
            path: "/user/:id",
            element: <User/>,
          },
          {
            path : "/users",
            element : <Users/>
          },
          {
            path: "/delete/:id",
            element: <Delete/>
          },
          {
            path : "/update/:id",
            element : <Update/>
          },{
            path : "/logout",
            element : <Logout/>
          }]
  
        }
        
         
      ],
    },
    
  ]);
  
export default appRouter;