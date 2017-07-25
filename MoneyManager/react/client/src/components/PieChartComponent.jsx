import React from 'react'
const ReactHighcharts = require('react-highcharts');

class PieChartComponent extends React.Component {

  constructor(props){
    super(props)
  }

  pasteTableData(){
    let categoriesArray = []
    this.props.categoryArray.forEach(function(category) {
      console.log(category);
      categoriesArray.push({
        name: category.name,
        y: category.name.length,
      })
    })
    return categoriesArray
  }

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
          data:  this.pasteTableData()
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
