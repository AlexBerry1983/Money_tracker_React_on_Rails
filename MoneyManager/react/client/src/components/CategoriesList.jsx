import React from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';

class CategoriesList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateForm: null
    }
  }

  updateCategory(catId){
    const UpdatedCatInfo = {
      category:{
        name: this.formRef.updateCatName.value
      }
    }
    console.log(UpdatedCatInfo);
    const jsonString = JSON.stringify(UpdatedCatInfo)
    const url = 'http://localhost:5000/categories/' + catId
    const request = new XMLHttpRequest();
    request.open('PUT', url)
    request.setRequestHeader('Content-type', 'Application/json')
    request.send(jsonString)
    this.props.refreshPage()
  }

  deleteCategory(catId){
    const url = 'http://localhost:5000/categories/' + catId
    const request = new XMLHttpRequest();
    request.open('DELETE', url)
    request.send()
    this.props.refreshPage()
  }

  render(){
    const catArray = this.props.categoriesArray.map((category, index) => {
      let updateForm = null
      if (this.state.updateForm === category.id){
        updateForm =
        <div id='catUpdateForm'>
          <form ref={(reference) => this.formRef = reference}>
            <input name='updateCatName' type='text' placeholder='update category name'/>
            <button onClick={() => {this.updateCategory(category.id)}}>Update</button>
          </form>
        </div>
      }
      return (
        <div id='categoryItem' key={index}>
          <CategoryItem categoryName={category.name}></CategoryItem>
          <button onClick={() => {this.deleteCategory(category.id)}}>Delete</button>
          <button onClick={() => {this.setState({updateForm: category.id})}}>Update</button>
          {updateForm}
        </div>
      )
    })
    return(
      <div>
        {catArray}
      </div>
    )
  }
}

export default CategoriesList
