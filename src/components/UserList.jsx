// import react from 'react';
import Card from "./Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  return ( 
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            Name: {user.name} ({user.age}) years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
