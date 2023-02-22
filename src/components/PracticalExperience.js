import React, { Component } from 'react'
import '../styles/styles.css'

export default class PracticalExperience extends Component {
  constructor(props){
    super(props)
    this.state = {
      formOpen: false,
      companyInput: "",
      jobTitleInput: "",
      mainTasksInput: "",
      dateFromInput: "",
      dateToInput: "",
      submittedExperiences: [],
      editing: null
    }
    this.openForm = this.openForm.bind(this)
    this.companyChange = this.companyChange.bind(this)
    this.jobTitleChange = this.jobTitleChange.bind(this)
    this.tasksChange = this.tasksChange.bind(this)
    this.dateFromChange = this.dateFromChange.bind(this)
    this.dateToChange = this.dateToChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }

  openForm(){
    this.setState({
      formOpen: true
    })
  }

  companyChange(e){
    this.setState({
      companyInput: e.target.value
    })
  }

  jobTitleChange(e){
    this.setState({
      jobTitleInput: e.target.value
    })
  }

  tasksChange(e){
    this.setState({
      mainTasksInput: e.target.value
    })
  }

  dateFromChange(e){
    this.setState({
      dateFromInput : e.target.value
    })
  }

  dateToChange(e){
    this.setState({
      dateToInput: e.target.value
    })
  }

  submitHandler(e){
    e.preventDefault()
    this.setState({
      submittedExperiences: [...this.state.submittedExperiences, {
        company: this.state.companyInput,
        job: this.state.jobTitleInput,
        tasks: this.state.mainTasksInput,
        from: this.state.dateFromInput,
        to: this.state.dateToInput

      }],
      formOpen: false,
      companyInput: "",
      jobTitleInput: "",
      mainTasksInput: "",
      dateFromInput: "",
      dateToInput: "",
    })
  }

  handleEdit(i, obj){
    this.setState({
      editing: i,
      companyInput: obj.company,
      jobTitleInput: obj.job,
      mainTasksInput: obj.tasks,
      dateFromInput: obj.from,
      dateToInput: obj.to
    })
  }

  submitEdit(edittedIndex){
    this.setState({
      editing: null,
      submittedExperiences: this.state.submittedExperiences.map((obj, i) => i === edittedIndex ? {
        company: this.state.companyInput,
        job: this.state.jobTitleInput,
        tasks: this.state.mainTasksInput,
        from: this.state.dateFromInput,
        to: this.state.dateToInput
      }
      :
      obj),
      formOpen: false,
      companyInput: "",
      jobTitleInput: "",
      mainTasksInput: "",
      dateFromInput: "",
      dateToInput: "",
    })
  }

  deleteItem(e, deletedIndex){
    e.stopPropagation()
    this.setState({
      submittedExperiences: this.state.submittedExperiences.filter((obj, i) => i !== deletedIndex)
    })
  }

  render() {
    const {formOpen, companyInput, jobTitleInput, mainTasksInput, dateFromInput, dateToInput, submittedExperiences, editing} = this.state
    const experienceItems = submittedExperiences.map((obj, i) => 
      editing === i ? 
      <form onSubmit={() => this.submitEdit(i)}>
          <label htmlFor='company'>Company: </label>
          <input name='company' value={companyInput} onChange={this.companyChange}></input>
          <label htmlFor='job-title'>Job Title: </label>
          <input name="job-title" value={jobTitleInput} onChange={this.jobTitleChange}></input>
          <label htmlFor='tasks'>Main Tasks:</label>
          <textarea name="tasks" value={mainTasksInput} onChange={this.tasksChange}></textarea>
          <label htmlFor='date-from'>From: </label>
          <input name="date-from" type="date" value={dateFromInput} onChange={this.dateFromChange}></input>
          <label htmlFor='date-to'>From: </label>
          <input name="date-to" type="date" value={dateToInput} onChange={this.dateToChange}></input>
          <button type="submit">Add</button>
      </form>
      :
      <div key={i} className="submitted-section" onClick={() => this.handleEdit(i, obj)}>
        <p><strong>Company: </strong>{obj.company}</p>
        <p><strong>Job Title: </strong>{obj.job}</p>
        <p><strong>Main Tasks: </strong>{obj.tasks}</p>
        <p><strong>From: </strong>{obj.from}</p>
        <p><strong>To: </strong>{obj.to}</p>
        <button onClick={(e) => this.deleteItem(e, i)}>Delete</button>
      </div>
    )

    if (!formOpen){
      return(
        <div className='practical-experience'>
          <h2>Practical Experience</h2>
          <div>{experienceItems}</div>
          <button onClick={this.openForm}>+ Add Experience</button>
        </div>
      )
    }
    else{
      return(
        <div className='practical-experience'>
          <h2>Practical Experience</h2>
          <div>{experienceItems}</div>
          <form onSubmit={this.submitHandler}>
            <label htmlFor='company'>Company: </label>
            <input name='company' value={companyInput} onChange={this.companyChange}></input>
            <label htmlFor='job-title'>Job Title: </label>
            <input name="job-title" value={jobTitleInput} onChange={this.jobTitleChange}></input>
            <label htmlFor='tasks'>Main Tasks:</label>
            <textarea name="tasks" value={mainTasksInput} onChange={this.tasksChange}></textarea>
            <label htmlFor='date-from'>From: </label>
            <input name="date-from" type="date" value={dateFromInput} onChange={this.dateFromChange}></input>
            <label htmlFor='date-to'>From: </label>
            <input name="date-to" type="date" value={dateToInput} onChange={this.dateToChange}></input>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
}
