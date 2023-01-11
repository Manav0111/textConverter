import React,{useState} from 'react'
// import React, { useState } from 'react'


export default function TextForm(props) {
    
    const handleCopyClick=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Coppeid To Clipboard!","success")
    }
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted To UpperCase!","success")
    }

    const handleOnChange=(e)=>{
        setText(e.target.value);
    }

    const handleLoClick=()=>{
        let newLow=text.toLowerCase();
        setText(newLow);
        props.showAlert("Text Converted To LowerCase!","success")
    }

    const handleRemClick=()=>{
        let arr=text.split(/[ ]+/);
      
        setText(arr.join(" "));
        props.showAlert("Extra Space Has Been Removed!","success")
    }
    const [text,setText]=useState('');


  return (

    <>
        <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
    <div className='container my-4'  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>

        </div>


    </div>
        <button className='btn btn-primary mx-3 my-1' onClick={handleLoClick}>LowerCase</button>
        <button className='btn btn-primary' onClick={handleUpClick}>UpperCase</button>
        <button className='btn btn-primary mx-3 my-1' onClick={handleRemClick}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-3 my-1' onClick={handleCopyClick}>Copy Text</button>
    <div className='container my-3'  style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Sumarry</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
