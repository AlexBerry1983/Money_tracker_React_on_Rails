import React from 'react'
import {Link} from 'react-router-dom'

class NavbarComponent extends React.Component{

  render(){
    return(
      <div className='Nav'>
        <button><Link to='/transactions'>Transactions</Link></button>
        <button>Monthly Report</button>
      </div>
    )
  }
}

export default NavbarComponent
