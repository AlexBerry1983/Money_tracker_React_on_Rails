import React from 'react'

class TransactionItem extends React.Component{

  render(){
    return(
      <p>Transaction Title: {this.props.name}, Amount: {this.props.amount}, Date: {this.props.date}, Category: {this.props.cat}</p>
    )
  }
}

export default TransactionItem
