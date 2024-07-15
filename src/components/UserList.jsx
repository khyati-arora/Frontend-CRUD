import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { base_api_url } from "../constant.js";
const UserList = () => {
    const [users, setUsers] = useState([]);
    const token = 'Bearer ' + localStorage.getItem('accessToken');
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(base_api_url + "users",{
                headers : {
                    Authorization : token
                }
            });
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user,index) => (
                    <li key={index}> 
                        <div> <span>{user.id}</span><br/>{user.username} </div>
                        <Link to = {"/user/" + user.id} ><button>View Details</button></Link>
                        <br/>
                        <br/>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default UserList;