import React, { Component } from 'react'
import '../styles/styles.css'
import github from '../images/github.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright © 2023 DonnieAndMooie</p>
      <img src={github} alt="Github Logo" className='github' />
    </div>
  )
}

export default Footer