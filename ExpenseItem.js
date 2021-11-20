import React, { useState} from "react";
import "./ExpenseItem.css";

const ExpenseItem =(props) => {

    const[newTitle, setNewTitle]= useState("");

   const[title, setTitle]= useState(props.title);
  
    
    const clickHandler = () => {
        setTitle(newTitle)
    }

    const changeHandler = (event) =>{
        setNewTitle(event.target.value);
    }

    
  
    return (
        <div className="expense-item">
         <div>{props.reference}</div>
         <div className="expense-describe "> <h2>{ title }</h2></div>
            <div className="expense-price"> {props.amount}</div>
            <input type ="text" value = {newTitle} onChange= {changeHandler} />
            <button onClick={clickHandler}> change title </button>
        </div>
    )

}

export default ExpenseItem;