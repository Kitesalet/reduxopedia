import React from 'react'
import logo from '../../Images/logo192.png'


export const Header = (props) => {
  return (
    
    <div className='pt-3 pl-2 align-self-center'>
        <img src={logo} alt="" style={{marginLeft:"15px",height:"35px", verticalAlign:"top"}} />
        <span className='h2 pt-4 text-white-50 m-4'>React Course - ReduxOPedia</span>
    </div>

  )
}

export default Header