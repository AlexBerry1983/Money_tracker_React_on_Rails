import React from 'React'
import TransactionsList from '../components/TransactionsList'

class TransactionsContainer extends React.Component{

  render(){
    return(
      <TransactionsList />
    )
  }

  // componentDidMount(){
  //   const url = 'http://localhost:5000/transactions'
  //   const request = new XMLHttpRequest()
  //   request.open('GET', url)
  //   request.onload() => {
  //     if (request === 200){
  //       const jsonString = request.responseText
  //       const data = JSON.parse(jsonString)
  //       this.setState({transactions: data})
  //     }
  //   }
  //   request.send()
  // }
}

export default TransactionsContainer
