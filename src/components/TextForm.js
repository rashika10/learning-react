import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UppperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleTitleClick = () =>{
    if (!text) {
      return ""
  }
    let newText = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    setText(newText)
  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText)
  }

  const handleOnChange= (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }

  
  const [text,setText] = useState('');
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Convert to Title Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Click to clear</button>
    
    </div>
     <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} and {text.length} characters </p>
      <p>{0.008*text.split(" ").length} minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
    </>
  )
}
