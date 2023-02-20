import React, { Component } from 'react'
import '../styles/styles.css'
import profilePic from '../images/profile.png'
import Input from './Input'

export default class GeneralInfo extends Component {
  render() {
    return (
      <div className='general-info'>
        <h2>General Information</h2>
        <img src={profilePic} className="profile-pic" alt="profile"/>
        <Input type="Name"/>
        <Input type="Email"/>
        <Input type="Phone Number"/>
      </div>
    )
  }
}
