import React from 'react'
import {Link} from 'react-router-dom'

class NewTransactionForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      TransactionName: "",
      TransactionAmount: null,
      TransactionDate: null
    }
  }

  createNewTransaction(event){
    event.preventDefault()
    const {form} = this.refs
    let formInfo = {
      transaction: {
        name: form.name.value,
        amount: form.amount.value,
        date: form.date.value
      }
    }
    formInfo = JSON.stringify(formInfo)
    const url = 'http://localhost:5000/transactions'
    const request = new XMLHttpRequest()
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(formInfo)
  }

  render(){
    return(
      <div id="NewTransactionForm">
        <form ref="form">
          <input name="name" type='text' placeholder='transaction name'/>
          <input name="amount" type='text' placeholder='transaction amount'/>
          <input name="date" type='text' placeholder='date: yyyy/mm/dd'/>
          <button onClick={this.createNewTransaction.bind(this)}>Confirm</button>
        </form>
        <button><Link to='/transactions'>Transactions</Link></button>
        <button><Link to='/'>Home</Link></button>
      </div>
    )
  }
}

export default NewTransactionForm
