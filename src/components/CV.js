import React, { Component } from 'react'
import '../styles/styles.css'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'

export default class CV extends Component {
  render() {
    return (
      <div className='cv-container'>
        <div className='cv'>
          <GeneralInfo/>
          <Education/>
          <PracticalExperience/>
        </div>
      </div>
    )
  }
}
