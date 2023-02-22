import React, { Component } from 'react'
import '../styles/styles.css'

export default class Education extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonClicked: false,
      schoolInput: "",
      qualificationInput: "",
      dateFromInput: "",
      dateToInput: "",
      submittedEducation: [],
      editing: null
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.schoolChange = this.schoolChange.bind(this)
    this.qualificationChange = this.qualificationChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.dateFromChange = this.dateFromChange.bind(this)
    this.dateToChange = this.dateToChange.bind(this)
    this.editHandler = this.editHandler.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  clickHandler(){
    this.setState({
      buttonClicked: true
    })
  }

  schoolChange(e){
    this.setState({
      schoolInput: e.target.value
    })
  }

  qualificationChange(e){
    this.setState({
      qualificationInput: e.target.value
    })
  }

  submitHandler(e){
    this.setState({
      submittedEducation: [...this.state.submittedEducation, {
        school: this.state.schoolInput,
        qualification: this.state.qualificationInput,
        from: this.state.dateFromInput,
        to: this.state.dateToInput
      }],
      buttonClicked: false,
      schoolInput: "",
      qualificationInput: "",
      dateFromInput: "",
      dateToInput: "",
    })
  }

  dateFromChange(e){
    this.setState({
      dateFromInput: e.target.value
    })
  }

  dateToChange(e){
    this.setState({
      dateToInput: e.target.value
    })
  }

  editHandler(i, obj){
    this.setState({
      editing: i,
      schoolInput: obj.school,
      qualificationInput: obj.qualification,
      dateFromInput: obj.from,
      dateToInput: obj.to,
       
    })
  }

  submitEdit(edittedIndex){
    this.setState({
      editing: null,
      submittedEducation: this.state.submittedEducation.map((obj, i) => (i === edittedIndex ? {
        school: this.state.schoolInput,
        qualification: this.state.qualificationInput,
        from: this.state.dateFromInput,
        to: this.state.dateToInput
      } : obj)),
      buttonClicked: false,
      schoolInput: "",
      qualificationInput: "",
      dateFromInput: "",
      dateToInput: "",
    })
  }

  deleteItem(e, deletedIndex){
    e.stopPropagation()
    this.setState({
      submittedEducation: this.state.submittedEducation.filter((obj, i) => i !== deletedIndex)
    })
  }

  render() {
    const { buttonClicked, schoolInput, qualificationInput, dateFromInput, dateToInput, editing } = this.state
    const educationItems = this.state.submittedEducation.map((obj, i) =>
        editing === i ? 
        <form key={i} onSubmit={() => this.submitEdit(i)}>
            <h3>Edit Education</h3>
            <label htmlFor='school'>School Name:</label>
            <input value={schoolInput} name="school" onChange={this.schoolChange}></input>
            <label htmlFor='qualification'>Qualification:</label>
            <input value={qualificationInput} name="qualification" onChange={this.qualificationChange}></input>
            <label htmlFor='date-from'>From:</label>
            <input type="date" name="date-from" value={dateFromInput} onChange={this.dateFromChange}></input>
            <label htmlFor='date-to'>To:</label>
            <input type="date" name="date-to" value={dateToInput} onChange={this.dateToChange}></input>
            <button type="submit">Submit Changes</button>
          </form>
        : 
        <div key={i} className="submitted-section" onClick={() => this.editHandler(i, obj)}>
          <p><strong>School: </strong>{obj.school}</p>
          <p><strong>Qualification: </strong>{obj.qualification}</p>
          <p><strong>From: </strong>{obj.from}</p>
          <p><strong>To: </strong>{obj.to}</p>
          <button onClick={(e) => this.deleteItem(e, i)}>Delete</button>
        </div>
      )
    if (!buttonClicked){
      return (
        <div>
          <h2>Education</h2>
          <div>{educationItems}</div>
          <button onClick={this.clickHandler}>+ Add Qualification</button>
        </div>
      )
    }
    else{
      return (
        <div>
          <h2>Education</h2>
          <div>{educationItems}</div>
          <form onSubmit={this.submitHandler}>
            <h3>New Education</h3>
            <label htmlFor='school'>School Name:</label>
            <input value={schoolInput} name="school" onChange={this.schoolChange}></input>
            <label htmlFor='qualification'>Qualification:</label>
            <input value={qualificationInput} name="qualification" onChange={this.qualificationChange}></input>
            <label htmlFor='date-from'>From:</label>
            <input type="date" name="date-from" value={dateFromInput} onChange={this.dateFromChange}></input>
            <label htmlFor='date-to'>To:</label>
            <input type="date" name="date-to" value={dateToInput} onChange={this.dateToChange}></input>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
    
  }
}
