import React from 'react';
import TransactionItem from './TransactionItem';
import {Link} from 'react-router-dom';

class TransactionsList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateTransForm: null,
      showNewTranForm: false,
      categories: []
    }
  }

  calculateTotal(array){
    let totalSpent = 0
    array.forEach(function(object){
      totalSpent += Number(object.amount)
    })
    return parseFloat(totalSpent.toFixed(3))
  }

  componentDidMount(props){
    const url = 'http://localhost:5000/categories'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      const jsonString = request.responseText
      const catList = JSON.parse(jsonString)
      this.setState({
        categories: catList
      })
    }
    request.send()
  }

  onNukeTheItem(transactionId){
    this.props.nuke(transactionId)
  }

  render(){
    const dropdownItems = this.state.categories.map((category, index) => {
      return <option key={index} value={category.id}>{category.name}</option>
    })
    const transactionArray = this.props.transactionInfo.map((transaction, index) => {
      let updateTransForm = null
      if (this.state.updateTransForm === transaction.id){
        updateTransForm =
        <div id='updateTransactionForm'>
          <form ref={(reference) => this.formRef = reference}>
            <input name='UpdateTransName' type='text' placeholder='update transaction name' defaultValue={transaction.name}/>
            <input name='UpdateTransAmount' type='text' placeholder='update transaction amount' defaultValue={transaction.amount}/>
            <input name='UpdateTransDate' type='date' placeholder='update transaction date: yyyy/mm/dd' defaultValue={transaction.date}/>
            <select name='UpdateTransCategory' defaultValue={transaction.category.id}>{dropdownItems}</select>
            <button onClick={() => {this.props.updateTransactions(event, transaction.id, this)}}>Update</button>
          </form>
        </div>
      }
      return (
        <div id="TransList" key={index}>
          <TransactionItem name={transaction.name} amount={transaction.amount} date={transaction.date} cat={transaction.category.name}/>
          <button onClick={() => {this.onNukeTheItem(transaction.id)}}>Delete</button>
          <button id='newTransactionButton' onClick={() => {this.setState({updateTransForm: transaction.id})}}>Update</button>
          {updateTransForm}
        </div>
      )
    })
    const newDropDownItems = this.state.categories.map((category, index) => {
      return <option key={index} value={category.id}>{category.name}</option>
    })
    let showNewTranForm = null
      if (this.state.showNewTranForm === true){

      showNewTranForm =
        <div id="NewTransactionForm">
          <form ref={(newTform) => this.newForm = newTform}>
            <input name="name" type='text' placeholder='transaction name' value={this.state.name}/>
            <input name="amount" type='text' placeholder='transaction amount'/>
            <input name="date" type='date' placeholder='date: yyyy/mm/dd'/>
            <select name="newCategorySelect">{newDropDownItems}</select>
            <button onClick={(event) => {this.props.createNewTransaction(event, this)}}>Confirm</button>
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
