import React,{useState} from 'react';
import AddUser from './component/user/addUser';
import UserList from './component/user/UserList';


function App() {
const [userList,setUserList]=useState([])

const addUserHandler=(uName,uAge)=>{
  setUserList(preView=>{
    return[
    ...preView,
    {
      key:Math.random().toString(),
      name:uName,
      age:uAge,
    }
  ]
})
}

  return (
    <div> 
           <AddUser onAddUser={addUserHandler}/> 
           <UserList users={userList} />
    </div>
  );
}
 
export default App;
