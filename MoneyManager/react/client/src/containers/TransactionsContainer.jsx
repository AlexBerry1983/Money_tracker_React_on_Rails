import React from 'React';
import TransactionsList from '../components/TransactionsList';
import {Link} from 'react-router-dom';

class TransactionsContainer extends React.Component{

  constructor(props){
    super(props)
    this.getTheTransactions = this.getTheTransactions.bind(this)
    this.deleteTheTransaction = this.deleteTheTransaction.bind(this)
    this.state = {
      transactions: [],
      categories: []
    }
  }

  getTheTransactions(){
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

  deleteTheTransaction(transactionId){
    const url = 'http://localhost:5000/transactions/' + transactionId
    const request = new XMLHttpRequest()
    request.open('DELETE', url)
    request.onload = () => {
      this.getTheTransactions()
    }
    request.send()
  }

  componentDidMount(){
    this.getTheTransactions()
  }

  render(){
    return(
      <div>
        <h1>Transactions Summary</h1>
        <TransactionsList
          transactionInfo={this.state.transactions}
          deleteTransaction={this.deleteTheTransaction}
          cats={this.state.categories}/>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/CategoriesHome'>Spending Categories</Link></button>
      </div>
    )
  }
}

export default TransactionsContainer
