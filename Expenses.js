 import React from "react";
 import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
   
    return (
        <div className="expenses">

        {
            props.item.map(
                expense => (
                    <ExpenseItem
                 reference = {expense.id}
                 title = {expense.title}
                 amount = {expense.amount} />

                )
            )
        }
          /** 
             <ExpenseItem
                 reference = {props.item[0].id}
                 title = {props.item[0].title}
                 amount = {props.item[0].amount} />
        
        <ExpenseItem 
                 reference = {props.item[1].id}
                 title = {props.item[1].title}
                 amount = {props.item[1].amount} />
        
        <ExpenseItem  
                reference  = {props.item[2].id}
                 title = {props.item[2].title}
                 amount = {props.item[2].amount} />
        
        <ExpenseItem
                 reference = {props.item[3].id}
                 title = {props.item[3].title}
                 amount = {props.item[3].amount} />
        
        </div>
           
           
    )

}

export default Expenses;