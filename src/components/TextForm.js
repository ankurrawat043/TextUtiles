
import React, { useState } from "react";
// PropTypes from 'prop-types';

export default function TextForm(props) {
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success")

  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  

  const [text, setText] = useState("");
  
  
  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        
       

        <div className="mb-3" >
          <textarea
            
            className="form-control"
            style={{backgroundColor:props.mode==='light'?'white':"#042743",color:props.mode==='light'?'black':'white'}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        
       
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text 
        </button>
        
      </div>
      <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}} >
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in TextArea to preview it HERE!!!"}</p>
      </div>
    </>
  );
}
