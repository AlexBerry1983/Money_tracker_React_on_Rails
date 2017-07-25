import React from 'react';
import TransactionItem from './TransactionItem';
import {Link} from 'react-router-dom';

class TransactionsList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateTransForm: null,
      showNewTranForm: false
    }
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

  updateTransactions(transactionId){
    const updatedTransInfo = {
      transaction:{
        name: this.formRef.UpdateTransName.value,
        amount: this.formRef.UpdateTransAmount.value,
        date: this.formRef.UpdateTransDate.value
      }
    }
    const jsonString = JSON.stringify(updatedTransInfo);
    const url = 'http://localhost:5000/transactions/' + transactionId
    const request = new XMLHttpRequest()
    request.open('PUT', url)
    request.setRequestHeader('Content-Type', 'Application/json')
    request.send(jsonString)
    this.props.refreshState()
  }

  createNewTransaction(event){
    event.preventDefault()
    let formInfo = {
      transaction: {
        name: this.newForm.name.value,
        amount: this.newForm.amount.value,
        date: this.newForm.date.value
      }
    }
    formInfo = JSON.stringify(formInfo)
    const url = 'http://localhost:5000/transactions'
    const request = new XMLHttpRequest()
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(formInfo)
    this.props.refresh()
  }

  render(){
    const transactionArray = this.props.transactionInfo.map((transaction, index) => {
      let updateTransForm = null
      if (this.state.updateTransForm === transaction.id){
        updateTransForm =
        <div id='updateTransactionForm'>
          <form ref={(reference) => this.formRef = reference}>
            <input name='UpdateTransName' type='text' placeholder='update transaction name'/>
            <input name='UpdateTransAmount' type='text' placeholder='update transaction amount'/>
            <input name='UpdateTransDate' type='date' placeholder='update transaction date: yyyy/mm/dd'/>
            <button onClick={() => {this.updateTransactions(transaction.id)}}>Update</button>
          </form>
        </div>
      }
      return (
        <div id="TransList" key={index}>
          <TransactionItem name={transaction.name} amount={transaction.amount} date={transaction.date}/>
          <button onClick={() => {this.nukeTheItem(transaction.id)}}>Delete</button>
          <button onClick={() => {this.setState({updateTransForm: transaction.id})}}>Update</button>
          {updateTransForm}
        </div>
      )
    })
    let showNewTranForm = null
      if (this.state.showNewTranForm === true){
      showNewTranForm =
        <div id="NewTransactionForm">
          <form ref={(newTform) => this.newForm = newTform}>
            <input name="name" type='text' placeholder='transaction name'/>
            <input name="amount" type='text' placeholder='transaction amount'/>
            <input name="date" type='date' placeholder='date: yyyy/mm/dd'/>
            <button onClick={this.createNewTransaction.bind(this)}>Confirm</button>
          </form>
          <button><Link to='/transactions'>Transactions</Link></button>
          <button><Link to='/'>Home</Link></button>
        </div>
    }
    return(
      <div>
        {transactionArray}
        Total spent: {this.calculateTotal(this.props.transactionInfo)}
        {showNewTranForm}
        <button onClick={() => {this.setState({showNewTranForm: true})}}>Add a New Transaction</button>
      </div>
    )
  }


}

export default TransactionsList
