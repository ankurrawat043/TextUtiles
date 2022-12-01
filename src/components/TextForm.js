
import React from "react";
import { useState } from "react";

 function TextForm(props) {
  
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");

  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
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
        
       
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear Text 
        </button>
        
      </div>
      <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}} >
        <h1>Your text summery</h1>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview  HERE!!!"}</p>
      </div>
    </>
  );
}
export default TextForm;