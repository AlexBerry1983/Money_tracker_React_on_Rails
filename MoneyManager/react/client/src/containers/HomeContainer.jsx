import React from 'react'
import PieChartComponent from '../components/PieChartComponent'
import CalendarComponent from '../components/CalendarComponent'
import NavbarComponent from '../components/NavbarComponent'
import TransactionsContainer from './TransactionsContainer'
import ReactDOM from 'react-dom'

class HomeContainer extends React.Component {

  render(){
    return(
      <div>
        <PieChartComponent />
        <CalendarComponent />
        <TransactionsContainer />
        <NavbarComponent />
      </div>
    )
  }


}

export default HomeContainer
