import React, { Component } from 'react'
import '../styles/styles.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-content'>
            <h1>CV Application</h1>
            <h3><em>Just fill in the fields to create your CV!</em></h3>
        </div>
        
      </div>
    )
  }
}
