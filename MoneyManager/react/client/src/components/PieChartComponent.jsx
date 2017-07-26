import React from 'react'
const ReactHighcharts = require('react-highcharts');

class PieChartComponent extends React.Component {

  constructor(props){
    super(props)
  }

  pasteTableData(){
    let categoriesArray = []
    this.props.categoryArray.forEach(function(category) {
      categoriesArray.push({
        name: category.name,
        y: this.getCategoryAmount(category),
      })
    }.bind(this))
    return categoriesArray
  }

  getCategoryAmount(category){
    let totalValue = 0
    category.transactions.forEach(function(transactionObject){
      totalValue += Number(transactionObject.amount)
    })
    return totalValue
  }


  render(){
    const config = {
      chart: {
        type: 'pie',
        renderTo: PieChartComponent,
        backgroundColor: 'transparent',
      },
      plotOptions:{
        pie:{
          dataLabels:{
            enabled: true,
            color: '#ffffff',
            style: {fontFamily: 'fantasy', fontSize: '1.5em'}
          }
        }
      },
      title: {text: 'Monthly Breakdown',
    style:{
      color:'#ffffff',
      fontFamily: 'fantasy',
      fontSize: '2.5em'
    }},
      tooltip: {
        pointFormat: `Expenses Breakdown: £{point.y:.2f}`
      },
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
