import React from 'react'
const ReactHighcharts = require('react-highcharts');

class PieChartComponent extends React.Component {



  render(){
    const config = {
      chart: {
        type: 'pie',
        renderTo: PieChartComponent
      },
      title: {text: 'Monthly Breakdown'},
      series: [
        {
          name: 'Expenses Breakdown',
          data: [
            {
              name: 'Shopping',
              y: 95,
              color: "#73b7ff"
            },
            {
              name: 'Entertainment',
              y: 5,
              color: "#00ba2f"
            }
          ]
        }
      ]
    }
    return(
      <ReactHighcharts config = {config} domProps = {{id: 'chartId'}}></ReactHighcharts>

    )
  }
}

export default PieChartComponent
