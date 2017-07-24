import React from 'React';
import TransactionsList from '../components/TransactionsList';
import {Link} from 'react-router-dom';

class TransactionsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      transactions: []
    }
  }

  componentDidMount(){
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

  render(){
    return(
      <div>
        <h1>Transactions Summary</h1>
        <TransactionsList transactionInfo={this.state.transactions}/>
        <button><Link to='/newForm'>Add a new Transaction</Link></button>
      </div>
    )
  }
}

export default TransactionsContainer
