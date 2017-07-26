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

  deleteCategory(catId){
    const url = 'http://localhost:5000/categories/' + catId
    const request = new XMLHttpRequest();
    request.open('DELETE', url)
    request.onload = () => {
      this.getCategories()
    }
    request.send()
  }

  createNewCategory(formInfo){
    let catFormInfo = {
      category:{
        name: formInfo
      }
    }
    catFormInfo = JSON.stringify(catFormInfo)
    const url = 'http://localhost:5000/categories/'
    const request = new XMLHttpRequest();
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.onload = () => {
      this.componentDidMount()
    }
    request.send(catFormInfo)
  }

  updateCategory(catId, updateFormInfo){
    const UpdatedCatInfo = {
      category:{
        name: updateFormInfo
      }
    }
    console.log(UpdatedCatInfo);
    const jsonString = JSON.stringify(UpdatedCatInfo)
    const url = 'http://localhost:5000/categories/' + catId
    const request = new XMLHttpRequest();
    request.open('PUT', url)
    request.setRequestHeader('Content-type', 'Application/json')
    request.onload = () => {
      this.componentDidMount()
    }
    request.send(jsonString)
  }

  getCategories(){
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

  componentDidMount(){
    this.getCategories()
  }

  render(){
    return(
      <div>
        <CategoriesList
          categoriesArray={this.state.categories}
          // refreshPage={this.refreshCatList.bind(this)}
          deleteCategory={this.deleteCategory.bind(this)}
          makeNewCategory={this.createNewCategory.bind(this)}
          updateTheCategory={this.updateCategory.bind(this)}
        />
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/transactions'>Transactions</Link></button>
      </div>
    )
  }
}

export default CategoriesHome
