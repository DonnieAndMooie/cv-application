import React, { useState } from 'react'
import '../styles/styles.css' 

const Input = ({type}) => {
    const [input, setInput] = useState("")
    const [submitted, setSubmitted] = useState(true)

    const clickHandler = () => setSubmitted(false)
    const onChangeHandler = (e) => setInput(e.target.value)
    const submitHandler = () => setSubmitted(true)

    if (input === "" && submitted === true){
        return(
            <p className='not-entered general-input' onClick={clickHandler}>{type}</p>
        )
    }
    else if (submitted === true){
        return(
            <p className='entered general-input' onClick={clickHandler}>{input}</p>
        )
    }
    else{
        return(
            <div>
                <input type="text" className="general-info-input-box" value={input} onChange={onChangeHandler} />
                <button onClick={submitHandler}>Submit</button>
            </div>
        )
    }
}

export default Input