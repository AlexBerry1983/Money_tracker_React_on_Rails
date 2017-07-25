import React from 'react'
import PieChartComponent from '../components/PieChartComponent'
import CalendarComponent from '../components/CalendarComponent'
import NavbarComponent from '../components/NavbarComponent'
import TransactionsContainer from './TransactionsContainer'
import ReactDOM from 'react-dom'
import Calendar from 'rc-calendar';


class HomeContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      categories: [],
      transactionsList: []
    }
  }

  componentDidMount(){
    const url = 'http://localhost:5000/categories'
    const request = new XMLHttpRequest();
    request.open('GET', url)
    request.onload = () => {
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      this.setState({categories: data})
    }
    request.send()
    const url2 = 'http://localhost:5000/transactions'
    const request2 = new XMLHttpRequest();
    request2.open('GET', url2)
    request2.onload = () => {
      const jsonString2 = request2.responseText
      const data2 = JSON.parse(jsonString2)
      this.setState({transactionsList: data2})
    }
    request2.send()
  }

  render(){
    return(
      <div className= 'homeContainer'>
        <PieChartComponent categoryArray={this.state.categories} transactionsList={this.state.transactionsList}/>
        <CalendarComponent />
        <NavbarComponent />
      </div>
    )
  }


}

export default HomeContainer
