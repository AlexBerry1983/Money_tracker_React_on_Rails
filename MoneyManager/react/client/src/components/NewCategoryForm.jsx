import React from 'react';
import {Link} from 'react-router-dom';

class NewCategoryForm extends React.Component{



  createNewCategory(){
    event.preventDefault()
    const {form} = this.refs
    let catFormInfo = {
      category:{
        name: form.name.value
      }
    }
    console.log(catFormInfo);
    catFormInfo = JSON.stringify(catFormInfo)
    const url = 'http://localhost:5000/categories/'
    const request = new XMLHttpRequest();
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(catFormInfo)
  }

  render(){
    return(
      <div id='NewCatForm'>
        <form ref='form'>
          <input name='name' type='text' placeholder='category name'/>
          <button onClick={this.createNewCategory.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewCategoryForm
