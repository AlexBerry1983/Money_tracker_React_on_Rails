import React from 'react'
import {Link} from 'react-router-dom'

class NavbarComponent extends React.Component{

  render(){
    return(
      <div className='Nav'>
        <button><Link to='/transactions'>Transactions</Link></button>
        <button><Link to='/CategoriesHome'>Spending Categories</Link></button>
      </div>
    )
  }
}

export default NavbarComponent
