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

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  
  const [text,setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Convert to Title Case</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    
    </div>
     <div className="container my-3"  style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} and {text.length} characters </p>
      <p>{0.008*text.split(" ").length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something above to preview here"}</p>
     </div>
    </>
  )
}
