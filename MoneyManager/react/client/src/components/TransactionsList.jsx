import React from 'react'
import TransactionItem from './TransactionItem'

class TransactionsList extends React.Component{

  render(){
    let transactionArray = this.props.transactionInfo.map((transaction, index) => {
      return <TransactionItem key={index} name={transaction.name} amount={transaction.amount}/>
    })

    return(
      <div>
        {transactionArray}
      </div>
    )
  }


}

export default TransactionsList
