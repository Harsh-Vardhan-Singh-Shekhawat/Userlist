import   { useState } from "react";
import Card from './Card';
import Button from './Button'
import styles from './AddUser.module.css';

export default function AddUser(props) {

   const [enteredName,setEnteredName] = useState('');
   const [enteredAge,setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredAge.trim().length === 0 || enteredName.trim().length === 0 ){
          return;
        }
        if(+enteredAge < 1){ // Here enteredAge is considered as string, to convert it into a number + is added so that it will be traeted as number
          return;
        }
        // console.log(setEnteredAge,setEnteredName);
        props.onAddUser(enteredName,enteredAge);
        setEnteredName('');
        setEnteredAge('');
       
    };
    const nameHandler = event =>{
        setEnteredName(event.target.value);
    }
    const ageHandler = event => {
        setEnteredAge(event.target.value); 
    }
  
  return (
    <Card className={styles.input }>
    <form onSubmit={addUserHandler}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={enteredName} onChange={nameHandler}></input>
      <label htmlFor="age">Age:</label>
      <input id="age" type="number" value={enteredAge} onChange={ageHandler}></input>
      <Button type="submit" >Add User</Button>
    </form>
    </Card>
  );
}
