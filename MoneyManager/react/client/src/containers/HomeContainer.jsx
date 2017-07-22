import React from 'react'
import PieChartComponent from '../components/PieChartComponent'
import CalendarComponent from '../components/CalendarComponent'

class HomeContainer extends React.Component {

  render(){
    return(
      <div>
        <PieChartComponent />
        <CalendarComponent />
      </div>
    )
  }
}

export default HomeContainer
