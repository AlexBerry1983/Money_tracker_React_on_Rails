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

  createNewTransaction(event, transList){
    event.preventDefault()
    const formInfo = {
      transaction: {
        name: transList.newForm.name.value,
        amount: transList.newForm.amount.value,
        date: transList.newForm.date.value,
        category_id: transList.newForm.newCategorySelect.value
      }
    }

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
        />
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/CategoriesHome'>Spending Categories</Link></button>
      </div>
    )
  }
}

export default TransactionsContainer
