import React, { useState } from 'react'
import AddUser from './components/AddUser';
import UserList from './components/UserList';


function App() {
  const [userInput, setUserInput] = useState([]);
  const addUserHandler = (uName,uAge) => {
    setUserInput((prevInput) => {
      return [...prevInput,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userInput}/>  
    </div>
  );
}

export default App;
