import React from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';

class CategoriesList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      updateForm: null,
      newCateForm: false,
      newFormInfo: "",
      updateFormInfo: ""
    }
  }

  handleOnChange(event){
    this.setState({
      newFormInfo: event.target.value
    })
  }

  handleUpdateOnChange(event){
    this.setState({
      updateFormInfo: event.target.value
    })
  }

  onUpdateCategory(catId){
    this.props.updateTheCategory(catId, this.state.updateFormInfo)
  }

  onMakeNewCategory(event){
    event.preventDefault()
    this.props.makeNewCategory(this.state.newFormInfo)
  }

  onDeleteCategory(id){
    this.props.deleteCategory(id)
  }

  render(){
    const catArray = this.props.categoriesArray.map((category, index) => {
      let updateForm = null
      if (this.state.updateForm === category.id){
        updateForm =
        <div id='catUpdateForm'>
          <form onSubmit={() => {this.onUpdateCategory(category.id)}}>
            <input name='updateCatName' type='text' placeholder='update category name' value={this.state.updateFormInfo} onChange={(event) => this.handleUpdateOnChange(event)}/>
            <button>Update</button>
          </form>
        </div>
      }
      return (
        <div id='categoryItem' key={index}>
          <CategoryItem categoryName={category.name}></CategoryItem>
          <button onClick={() => {this.onDeleteCategory(category.id)}}>Delete</button>
          <button onClick={() => {this.setState({updateForm: category.id})}}>Update</button>
          {updateForm}
        </div>
      )
    })
    let newCateForm = false
    if (this.state.newCateForm === true)
      newCateForm =
      <div id='NewCatForm'>
        <form onSubmit={(event) => {this.onMakeNewCategory(event)}}>
          <input name='name' type='text' placeholder='category name' value={this.state.newFormInfo} onChange={(event) => this.handleOnChange(event)}/>
          <button>Submit</button>
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
