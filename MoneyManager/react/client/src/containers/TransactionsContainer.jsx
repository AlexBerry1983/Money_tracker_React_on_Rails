import React from 'React';
import TransactionsList from '../components/TransactionsList';
import {Link} from 'react-router-dom';

class TransactionsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      transactions: [],
      categories: []
    }
    this.createNewTransaction = this.createNewTransaction.bind(this);
    this.updateTransactions = this.updateTransactions.bind(this);
  }

  getTransactions(){
    const url = 'http://localhost:5000/transactions'
    const request = new XMLHttpRequest()
    request.open('GET', url);

    request.onload = () => {
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({transactions: data})
    }
    request.send()
  }

  componentDidMount(){
    this.getTransactions()
  }

  nukeTheItem(transactionId){
    const url = 'http://localhost:5000/transactions/' + transactionId
    const request = new XMLHttpRequest()
    request.open('DELETE', url)
    request.onload = () => {
      this.getTransactions()
    }
    request.send()
  }

  updateTransactions(event, transactionId, updatedTransactionForm){
    console.log(event);
    console.log(transactionId);
    console.log(updateTransactionForm);
    event.preventDefault()
    const updatedTransInfo = {
      transaction:{
        name: updatedTransactionForm.formRef.UpdateTransName.value,
        amount: updatedTransactionForm.formRef.UpdateTransAmount.value,
        date: updatedTransactionForm.formRef.UpdateTransDate.value,
        category_id: updatedTransactionForm.formRef.UpdateTransCategory.value
      }
    }
    const jsonString = JSON.stringify(updatedTransInfo);
    const url = 'http://localhost:5000/transactions/' + transactionId
    const request = new XMLHttpRequest()
    request.open('PUT', url)
    request.setRequestHeader('Content-Type', 'Application/json')
    request.onload = () => {
      this.getTransactions()
    }
    request.send(jsonString)
  }

  createNewTransaction(event, transList){
    console.log("sending new request");
    event.preventDefault()
    const formInfo = {
      transaction: {
        name: transList.newForm.name.value,
        amount: transList.newForm.amount.value,
        date: transList.newForm.date.value,
        category_id: transList.newForm.newCategorySelect.value
      }
    }
    console.log(formInfo);
    const jsonString = JSON.stringify(formInfo);
    const url = 'http://localhost:5000/transactions';
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = () => {
      this.getTransactions();
    }
    request.send(jsonString);
  }

  render(){
    return(
      <div>
        <h1>Transactions Summary</h1>
        <TransactionsList
          transactionInfo={this.state.transactions}
          cats={this.state.categories}
          nuke={this.nukeTheItem.bind(this)}
          getApiTransactions={this.getTransactions}
          createNewTransaction={this.createNewTransaction}
          updateTransactions={this.updateTransactions}
        />
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/CategoriesHome'>Spending Categories</Link></button>
      </div>
    )
  }
}

export default TransactionsContainer
