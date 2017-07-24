import React from 'react'
import TransactionItem from './TransactionItem'

class TransactionsList extends React.Component{

  constructor(props){
    super(props)
  }

  calculateTotal(array){
    let totalSpent = 0
    array.forEach(function(object){
      totalSpent += Number(object.amount)
    })
    return totalSpent
  }

  render(){
    const transactionArray = this.props.transactionInfo.map((transaction, index) => {
      return <TransactionItem key={index} name={transaction.name} amount={transaction.amount}/>
    })

    return(
      <div>
        {transactionArray}
        Total spent: {this.calculateTotal(this.props.transactionInfo)}
      </div>
    )
  }


}

export default TransactionsList
