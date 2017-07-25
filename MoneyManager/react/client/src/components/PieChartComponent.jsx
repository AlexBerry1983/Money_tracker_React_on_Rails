import React from 'react'
const ReactHighcharts = require('react-highcharts');

class PieChartComponent extends React.Component {

  //need to associate transactions with category so can get total spent by category
  //once have total spent need to calculate percentage for each catgory for pie chart
  //need to dynamically generate data array with categories and percentages populate


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
      <div className = 'chart'>
        <ReactHighcharts config = {config} domProps = {{id: 'chartId'}}></ReactHighcharts>
      </div>
    )
  }
}

export default PieChartComponent
