import React from 'react'
const ReactHighcharts = require('react-highcharts');

class PieChartComponent extends React.Component {


  const config = {
    chart: {
      type: 'pie',
      renderTo: container
    }
  }



  render(){
    return(
      <div>{config}</div>
    )
  }
}

export default PieChartComponent
