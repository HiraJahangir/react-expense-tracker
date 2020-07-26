import React, { useContext } from 'react'
//import Global Context
import {GlobalContext} from '../context/GlobalState';

//import Transactions
import {Transaction} from './Transaction';

export const TransactionHistory =  () => {

    const {transactions}= useContext(GlobalContext);

    
    return (
       <div>
           <h3>TransactionHistory</h3>
           <ul className="list">
               {transactions.map(transaction =>(
               <Transaction key={transaction.id} transaction={transaction}/>
               )
               )
               }
           </ul>
       </div> 
       
        
    )
} 