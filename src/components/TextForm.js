import React, { useState } from 'react'

export default function TextForm(props) {
  const handleOnClick = () =>{
    // console.log("UppperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)

  }

  const handleOnChange= (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter Your Text Here');
  
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
    </div>
  )
}
