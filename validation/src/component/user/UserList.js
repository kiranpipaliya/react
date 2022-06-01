
import React from "react";
import Card from "../Ui/Card";

import "./UserList.css"

const UserList=(props)=>{
return(
    <Card className="users"> 
        <ul>
            {props.users.map(user=>{
      return   <li key={user.key}>{user.name} ({user.age} Year Old)</li>
            })} 
        </ul>
    </Card>
) 

}

export default UserList;