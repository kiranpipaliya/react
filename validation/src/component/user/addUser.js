import React from "react"
import Card from "../Ui/Card";
import "./addUser.css"

const AddUser=props=>{

    const addUserHandler= (event)=>{
        event.preventDefault();
    }

    return(
        <Card className="input">
        <form  onSubmit={addUserHandler}>
            <label htmlFor="username" >Username</label>
            <input id="username" typeof="text" />

            <label htmlFor="age" >Age (Year)</label>
            <input id="age" typeof="number" />

            <button type="submit">Add User</button>
        </form>
        </Card> 
    )

}
export default AddUser;