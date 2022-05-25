import React from 'react'

const Child = (props) => {
const data1= "Hello from child";
props.onDataChild(data1);
  return (
    <div>
      <p>I am child component </p>
      <p>{props.data}</p>
    </div>
  )
}

export default Child
