import React, { Component } from 'react'
import '../styles/styles.css'
import github from '../images/github.png'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>Copyright © 2023 DonnieAndMooie</p>
        <img className='github' src={github} alt="Github Logo"/>
      </div>
    )
  }
}
