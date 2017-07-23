import React from 'React'
import TransactionsList from '../components/TransactionsList'

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
      <TransactionsList transactionInfo={this.state.transactions}/>
    )
  }
}

export default TransactionsContainer
