import React from 'react'
import Form from './Form'


const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-img'>
            <img src='./../bluejpg.jpg'></img>
           
        </div>
        <div id='form' className='form-section'>
            <h2 className='form-title'>Задайте вопрос</h2>
               
                  <Form />
           
           
       
        </div>
    </div>
  )
}

export default Footer