import React from 'react'

class NewTransactionForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      TransactionName: "",
      TransactionAmount: null,
      TransactionDate: null
    }
  }

  handleNameChange(event){
    console.log(event.target.value);
    this.setState({
      TransactionName: event.target.value
    })
  }

  render(){
    return(
      <div id="NewTransactionForm">
        <form>
          <input type='text' placeholder='transaction name' onChange={this.handleNameChange.bind(this)}/>
          <input type='text' placeholder='transaction amount'/>
          <input type='text' placeholder='date: yyyy/mm/dd'/>
          <button onClick={this.createNewTransaction}>Confirm</button>
        </form>
      </div>
    )
  }
}

export default NewTransactionForm
