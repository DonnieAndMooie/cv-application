import React, { Component, useState } from 'react'
import '../styles/styles.css'

const CV = () => {
  const [buttonClicked, setButtonClicked] = useState(false)
  const [schoolInput, setSchoolInput] = useState("")
  const [qualificationInput, setQualificationInput] = useState("")
  const [dateFromInput, setDateFromInput] = useState("")
  const [dateToInput, setDateToInput] = useState("")
  const [submittedEducation, setSubmittedEducation] = useState([])
  const [editing, setEditing] = useState(null)

  const clickHandler = () => setButtonClicked(true)
  const schoolChange = (e) => setSchoolInput(e.target.value)
  const qualificationChange = (e) => setQualificationInput(e.target.value)
  const dateFromChange = (e) => setDateFromInput(e.target.value)
  const dateToChange = (e) => setDateToInput(e.target.value)


  const submitHandler = () => {
    setSubmittedEducation([...submittedEducation, {
      school: schoolInput,
      qualification: qualificationInput,
      from: dateFromInput,
      to: dateToInput
    }])
    setButtonClicked(false)
    setSchoolInput("")
    setQualificationInput("")
    setDateFromInput("")
    setDateToInput("")
  }

  const editHandler = (i, obj) => {
    setEditing(i)
    setSchoolInput(obj.school)
    setQualificationInput(obj.qualification)
    setDateFromInput(obj.from)
    setDateToInput(obj.to)
  }

  const submitEdit = (edittedIndex) => {
    setEditing(null)
    setSubmittedEducation(submittedEducation.map((obj, i) => (i === edittedIndex ?
      {
        school: schoolInput,
        qualification: qualificationInput,
        from: dateFromInput,
        to: dateToInput
      }
      : obj)))
    setButtonClicked(false)
    setSchoolInput("")
    setQualificationInput("")
    setDateToInput("")
    setDateFromInput("")
  }

  const deleteItem = (e, deletedIndex) => {
    e.stopPropagation()
    setSubmittedEducation(submittedEducation.filter((obj, i) => i !== deletedIndex))
  }

  const educationItems = submittedEducation.map((obj, i) => 
    editing === i ? 
    <form key={i} onSubmit={() => submitEdit(i)}>
      <h3>Edit Education</h3>
      <label htmlFor="school">School Name:</label>
      <input type="text" value={schoolInput} name="school" onChange={schoolChange} />
      <label htmlFor="qualification">Qualification:</label>
      <input type="text" value={qualificationInput} name="qualification" onChange={qualificationChange} />
      <label htmlFor="date-from">From:</label>
      <input type="date" name='date-from' value={dateFromInput} onChange={dateFromChange} />
      <label htmlFor="date-to">To:</label>
      <input type="date" name='date-to' value={dateToInput} onChange={dateToChange} />
      <button type="submit">Submit Changes</button>
    </form>
    :
    <div key={i} className="submitted-section" onClick={() => editHandler(i, obj)}>
      <p><strong>School: </strong>{obj.school}</p>
      <p><strong>Qualification: </strong>{obj.qualification}</p>
      <p><strong>From: </strong>{obj.from}</p>
      <p><strong>To: </strong>{obj.to}</p>
      <button onClick={(e) => deleteItem(e, i)}>Delete</button>
    </div>
  )

  if (!buttonClicked){
    return (
      <div>
        <h2>Education</h2>
        <div>{educationItems}</div>
        <button onClick={clickHandler}>+ Add Qualification</button>
      </div>
    )
  }
  else{
    return(
      <div>
        <h2>Education</h2>
        <div>{educationItems}</div>
        <form onSubmit={submitHandler}>
          <h3>New Education</h3>
          <label htmlFor="school">School Name:</label>
          <input type="text" value={schoolInput} name="school" onChange={schoolChange} />
          <label htmlFor="qualification">Qualification:</label>
          <input type="text" value={qualificationInput} name="qualification" onChange={qualificationChange} />
          <label htmlFor="date-from">From:</label>
          <input type="date" name='date-from' value={dateFromInput} onChange={dateFromChange} />
          <label htmlFor="date-to">To:</label>
          <input type="date" name='date-to' value={dateToInput} onChange={dateToChange} />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }

}

export default CV