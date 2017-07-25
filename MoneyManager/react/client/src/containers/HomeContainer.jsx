import React from 'react'
import PieChartComponent from '../components/PieChartComponent'
import CalendarComponent from '../components/CalendarComponent'
import NavbarComponent from '../components/NavbarComponent'
import TransactionsContainer from './TransactionsContainer'
import ReactDOM from 'react-dom'
import Calendar from 'rc-calendar';


class HomeContainer extends React.Component {


  render(){
    return(
      <div className= 'homeContainer'>
        <PieChartComponent />
        <CalendarComponent />
        <NavbarComponent />
      </div>
    )
  }


}

export default HomeContainer
