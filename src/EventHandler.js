import React, { Component } from 'react'

export default class EventHandler extends Component {
constructor(props) {
  super(props)

  this.state = {
     changedValue: ''
  }
}

    change=(e)=>{
        this.setState(
            {
                changedValue:e.target.value
            }
        )
   
}  
    render() {
    return (
      <div>
        <input type='text' onChange={this.change}></input>
        <p>{this.state.changedValue}</p>
        {/*<button onClick={this.handleClick}>click here</button>*/}
      </div>
    )
  }
}
