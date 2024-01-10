import React from 'react'
import "./Login.css"
import logo from '../../images/amalitech-fe4e08a8.svg'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <h2>Sign in</h2>
      <p>Enter your credentials to access your account</p>

      
    </div>
  )
}
