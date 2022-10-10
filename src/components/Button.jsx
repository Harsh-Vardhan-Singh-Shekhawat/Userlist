import React from "react";
import styles from './Button.module.css';

const Button = props => {

    return (
        <button
        className={styles.button}
        type={props.type}
        onClick= {props.clickHandler}
        >
            {props.children}
        </button>
    );
}
 export default Button;