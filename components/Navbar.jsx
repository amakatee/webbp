import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='inner-navbar'>
      <Link  to='about' spy={true}  offset={-150} smooth={true} duration={500}><div>Технологии</div></Link>
       <Link  to='main' spy={true}  offset={-150} smooth={true} duration={500}><div>Главная</div></Link> 
       <Link to='form' spy={true}  offset={-150} smooth={true} duration={500}> <div>Контакты</div></Link>
      </div>  
      
    </div>
  )
}

export default Navbar