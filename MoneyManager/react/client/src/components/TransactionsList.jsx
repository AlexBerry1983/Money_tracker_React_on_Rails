import React from 'react';
import TransactionItem from './TransactionItem';
import {Link} from 'react-router-dom';

class TransactionsList extends React.Component{

  constructor(props){
    super(props)
  }

  calculateTotal(array){
    let totalSpent = 0
    array.forEach(function(object){
      totalSpent += Number(object.amount)
    })
    return parseFloat(totalSpent.toFixed(3))
  }

  nukeTheItem(transactionId){
    const url = 'http://localhost:5000/transactions/' + transactionId
    const request = new XMLHttpRequest()
    request.open('DELETE', url)
    request.send()
    this.props.refresh()
  }


  render(){
    const transactionArray = this.props.transactionInfo.map((transaction, index) => {
      return (
        <div id="TransList" key={index}>
          <TransactionItem name={transaction.name} amount={transaction.amount}/>
          <button onClick={() => {this.nukeTheItem(transaction.id)}}>delete</button>
        </div>
      )
    })

    return(
      <div>
        {transactionArray}
        Total spent: {this.calculateTotal(this.props.transactionInfo)}
      </div>
    )
  }


}
//
export default TransactionsList
