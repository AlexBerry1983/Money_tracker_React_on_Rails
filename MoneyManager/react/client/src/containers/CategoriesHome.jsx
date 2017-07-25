import React from 'react';
import CategoriesList from '../components/CategoriesList';
import {Link} from 'react-router-dom';

class CategoriesHome extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      categories: []
    }
  }

  refreshCatList(){
    window.location.reload()
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
  }

  render(){
    return(
      <div>
        <CategoriesList categoriesArray={this.state.categories} refreshPage={this.refreshCatList.bind(this)}/>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/transactions'>Transactions</Link></button>
      </div>
    )
  }
}

export default CategoriesHome
