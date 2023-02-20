import React, { Component } from 'react'
import '../styles/styles.css' 

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            submitted: true
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            submitted: false
        })
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value
        })
    }

    submitHandler(){
        this.setState({
            submitted: true
        })
    }

  render() {
    const { input, submitted } = this.state
    const { type } = this.props
    if (input === "" && submitted === true){
        return(
            <p className='not-entered' onClick={this.clickHandler}>{type}</p>
        )
    }
    else if (submitted === true){
        return(
            <p className='entered' onClick={this.clickHandler}>{input}</p>
        )
    }
    else{
        return(
            <div>
                <input value={input} onChange={this.onChangeHandler}></input>
                <button onClick={this.submitHandler}>Submit</button>
            </div>
            
        )
    }
  }
}
