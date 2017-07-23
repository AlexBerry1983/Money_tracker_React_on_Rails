import React from 'react'

class TransactionItem extends React.Component{

  render(){
    return(
      <p>Transaction Title: {this.props.name}, Amount: {this.props.amount}</p>
    )
  }
}

export default TransactionItem
