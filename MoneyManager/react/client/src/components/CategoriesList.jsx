import React from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';

class CategoriesList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateForm: null,
      newCateForm: false
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

  createNewCategory(){
    event.preventDefault()
    const {form} = this.refs
    let catFormInfo = {
      category:{
        name: form.name.value
      }
    }
    catFormInfo = JSON.stringify(catFormInfo)
    const url = 'http://localhost:5000/categories/'
    const request = new XMLHttpRequest();
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(catFormInfo)
  }

  render(){
    const catArray = this.props.categoriesArray.map((category, index) => {
      let updateForm = null
      if (this.state.updateForm === category.id){
        updateForm =
        <div id='catUpdateForm'>
          <form ref={(reference) => this.formRef = reference}>
            <input name='updateCatName' type='text' placeholder='update category name' defaultValue={category.name}/>
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
    let newCateForm = false
    if (this.state.newCateForm === true)
      newCateForm =
      <div id='NewCatForm'>
        <form ref='form'>
          <input name='name' type='text' placeholder='category name'/>
          <button onClick={this.createNewCategory.bind(this)}>Submit</button>
        </form>
      </div>
    return(
      <div>
        {catArray}
        <button onClick={() => {this.setState({newCateForm: true})}}>Add New Category</button>
        {newCateForm}
      </div>
    )
  }
}

export default CategoriesList
