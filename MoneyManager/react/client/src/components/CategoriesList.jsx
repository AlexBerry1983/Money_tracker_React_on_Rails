import React from 'react'
import CategoryItem from './CategoryItem'

class CategoriesList extends React.Component{

  deleteCategory(catId){
    console.log("NUUUKE");
    const url = 'http://localhost:5000/categories/' + catId
    const request = new XMLHttpRequest();
    request.open('DELETE', url)
    request.send()
    this.props.refreshPage()
  }

  render(){
    const catArray = this.props.categoriesArray.map((category, index) => {
      return (
        <div id='categoryItem' key={index}>
          <CategoryItem categoryName={category.name}></CategoryItem>
          <button onClick={() => {this.deleteCategory(category.id)}}>Delete</button>
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
