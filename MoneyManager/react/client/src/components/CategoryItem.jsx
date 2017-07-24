import React from 'react'

class CategoryItem extends React.Component{

  render(){
    return(
      <p> Category name: {this.props.categoryName}</p>
    )
  }
}

export default CategoryItem
