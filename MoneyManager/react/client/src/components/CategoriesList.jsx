import React from 'react'
import CategoryItem from './CategoryItem'

class CategoriesList extends React.Component{

  render(){
    const catArray = this.props.categoriesArray.map((category, index) => {
      return <CategoryItem key={index} categoryName={category.name}></CategoryItem>
    })
    return(
      <div>
        {catArray}
      </div>
    )
  }
}

export default CategoriesList
