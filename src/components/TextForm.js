import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick =(event)=>{
        setText(text.toUpperCase());
        props.showAlert("Text Converted to Upper Case","success");
    }

    const handleLoClick =(event)=>{
        setText(text.toLowerCase());
        props.showAlert("Text Converted to Lower Case","success");
    }

    const handleClearClick =(event)=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }

    const handleAlterCaseClick =(event)=>{

        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        
        setText(chars.join(""));
        props.showAlert("Text Converted to Alter Case","success");
    }

    const handleOnchange =(e)=>{
        setText(e.target.value);
    }

    const[text,setText] = useState("");

  return (
    <>
    <div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
        <h2>{props.enterText}</h2>
        <div className="mb-3">
            <textarea style={{backgroundColor:props.mode==='light'?'white':'#80808057', color:props.mode==='light'?'black':'white'}} className="form-control" onChange={handleOnchange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleAlterCaseClick}>Convert To Alter Case</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary </h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        {text.length>0?text:'Enter something in the text box to preview here'}
    </div>
    
    </>
  )
}
