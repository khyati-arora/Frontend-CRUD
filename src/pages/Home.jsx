import {Link} from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
const Home = ()=>{
    
    const { isAuth } = useContext(UserContext);
    return (
        <div> 
            {!isAuth ?<Link to = "/login"><button>Login user</button></Link> : <Link to = "/logout"><button>Logout user</button></Link> }
            <br/>
            <br/>
            {!isAuth ? <Link to = "/add"><button>Signup user</button></Link> : <Link to="/users"><button>View/Edit users</button></Link>}
            <br/>
            <br/>
        </div>
    )

}
export default Home;
