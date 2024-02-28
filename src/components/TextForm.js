import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UppperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");

  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
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
    setText(newText);
    props.showAlert("Cleared Text!","success");
  }

  const handleOnChange= (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!","success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space!","success");
  }

  
  const [text,setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Convert to Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    
    </div>
     <div className="container my-3"  style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview here."}</p>
     </div>
    </>
  )
}
