import React, { Component } from 'react'

export default class State extends Component {
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}

    Increament=() =>{
        this.setState(
            {
                count: this.state.count +1
            }
        )
    }  
    Decreament=() =>{
        this.setState(
            {
                count: this.state.count -1
            }
        )
        
    }  
    render() {
    const{count}=this.state
    return (
      <div>
        <h1>Count: {count}</h1>
        <button  className= "button" onClick={this.Increament}>+</button>
        <button className= "button" onClick={this.Decreament} disabled={count===0 ?true:false}>-</button>
      </div>
    )
  }
}
