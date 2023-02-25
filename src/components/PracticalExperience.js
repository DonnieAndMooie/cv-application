import React, { useState } from 'react'
import '../styles/styles.css'

const PracticalExperience = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [companyInput, setCompanyInput] = useState("")
  const [jobTitleInput, setJobTitleInput] = useState("")
  const [mainTasksInput, setMainTasksInput] = useState("")
  const [dateFromInput, setDateFromInput] = useState("")
  const [dateToInput, setDateToInput] = useState("")
  const [submittedExperiences, setSubmittedExperiences] = useState([])
  const [editing, setEditing] = useState(null)

  const openForm = () => setFormOpen(true)
  const companyChange = (e) => setCompanyInput(e.target.value)
  const jobTitleChange = (e) => setJobTitleInput(e.target.value)
  const tasksChange = (e) => setMainTasksInput(e.target.value)
  const dateFromChange = (e) => setDateFromInput(e.target.value)
  const dateToChange = (e) => setDateToInput(e.target.value)
  const submitHandler = (e) => {
    e.preventDefault()
    setSubmittedExperiences([...submittedExperiences, {
      company: companyInput,
      job: jobTitleInput,
      tasks: mainTasksInput,
      from: dateFromInput,
      to: dateToInput
    }])
    setFormOpen(false)
    setCompanyInput("")
    setJobTitleInput("")
    setMainTasksInput("")
    setDateFromInput("")
    setDateToInput("")
  }

  const handleEdit = (i, obj) => {
    setEditing(i)
    setCompanyInput(obj.company)
    setJobTitleInput(obj.job)
    setMainTasksInput(obj.tasks)
    setDateFromInput(obj.from)
    setDateToInput(obj.to)
  }

  const submitEdit = (edittedIndex) => {
    setEditing(null)
    setSubmittedExperiences(submittedExperiences.map((obj, i) => i === edittedIndex ? {
      company: companyInput,
      job: jobTitleInput,
      tasks: mainTasksInput,
      from: dateFromInput,
      to: dateToInput
    }
    :
    obj
    ))
    setFormOpen(false)
    setCompanyInput("")
    setJobTitleInput("")
    setMainTasksInput("")
    setDateFromInput("")
    setDateToInput("")
  }

  const deleteItem = (e, deletedIndex) => {
    e.stopPropagation()
    setSubmittedExperiences(submittedExperiences.filter((obj, i) => i !== deletedIndex))
  }

  const experienceItems = submittedExperiences.map((obj, i) => 
    editing === i ?
    <form onSubmit={() => submitEdit(i)}>
      <label htmlFor="company">Company: </label>
      <input type="text" name='company' value={companyInput} onChange={companyChange} />
      <label htmlFor="job-title">Job Title: </label>
      <input type="text" name="job-title" value={jobTitleInput} onChange={jobTitleChange}/>
      <label htmlFor="tasks">Main Tasks: </label>
      <textarea name="tasks" value={mainTasksInput} onChange={tasksChange}></textarea>
      <label htmlFor="date-from">From: </label>
      <input type="date" name='date-from' value={dateFromInput} onChange={dateFromChange} />
      <label htmlFor="date-to">To: </label>
      <input type="date" name='date-to' value={dateToInput} onChange={dateToChange} />
      <button type="submit">Add</button>
    </form>
    :
    <div key={i} className="submitted-section" onClick={() => handleEdit(i, obj)}>
      <p><strong>Company: </strong>{obj.company}</p>
      <p><strong>Job Title: </strong>{obj.job}</p>
      <p><strong>Main Tasks: </strong>{obj.tasks}</p>
      <p><strong>From: </strong>{obj.from}</p>
      <p><strong>To: </strong>{obj.to}</p>
      <button onClick={(e) => deleteItem(e, i)}>Delete</button>
    </div>
)

if (!formOpen){
  return(
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      <div>{experienceItems}</div>
      <button onClick={openForm}>+ Add Experience</button>
    </div>
  )
}
else{
  return(
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      <div>{experienceItems}</div>

      <form onSubmit={submitHandler}>
        <h3>New Experience</h3>
        <label htmlFor="company">Company: </label>
        <input type="text" name='company' value={companyInput} onChange={companyChange} />
        <label htmlFor="job-title">Job Title: </label>
        <input type="text" name='job-title' value={jobTitleInput} onChange={jobTitleChange} />
        <label htmlFor="tasks">Main Tasks: </label>
        <textarea name="tasks" value={mainTasksInput} onChange={tasksChange}></textarea>
        <label htmlFor="date-from">From: </label>
        <input type="date" name='date-from' value={dateFromInput} onChange={dateFromChange}/>
        <label htmlFor="date-to">To: </label>
        <input type="date" name='date-to' value={dateToInput} onChange={dateToChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

}

export default PracticalExperience