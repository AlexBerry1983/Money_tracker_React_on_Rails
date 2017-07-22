import React from 'react'
import PieChartComponent from '../components/PieChartComponent'
import CalendarComponent from '../components/CalendarComponent'
import NavbarComponent from '../components/NavbarComponent'

class HomeContainer extends React.Component {

  render(){
    return(
      <div>
        <PieChartComponent />
        <CalendarComponent />
        <NavbarComponent />
      </div>
    )
  }
}

export default HomeContainer
