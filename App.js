import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMMY = () => [
   {
      id: "e1",
      title: "Car Insurance",
      amount: "$170",
   },
   {
    id: "e3",
    title: "Car Installment",
    amount: "$270",
 },
 {
    id: "e4",
    title: "Credit payment",
    amount: "$10", 
 },
 {
    id: "e5",
    title: "Grocery",
    amount: "$570", 
 }
]
function App(){
   const[expenses,setNew] = useState(DUMMY);

const dataParent = (expense) => {
   const updated = [expense, ...expenses]
   setNew(updated)
}

    return (
    <div>
    <NewExpense dataTransfer = {dataParent}  />
    <Expenses item= {expenses}/>
       

        </div>
    )
}

export default App;
