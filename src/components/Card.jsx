import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className} `}>
      {props.children} 
    </div>
  )
}

export default Card;
/* Here props.children is accessing the form inside the Card component because this function access the content between the opening and the closing tags. */