import React, { useState } from "react";

export default function About(props) {
  // const [myStyle,setStyle]=useState(
  //   {
  //     backgroundColor:"white",
  //     color:"black"
  // })

  // const[text,myText]=useState("Enable dark  mode");

 // const myStyle = {
  //   color: props.mode === "light" ? "#042743" : "white",
  //   backgroundColor: props.mode === "dark" ? "white" : "#042743",
   
  // };

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
}

  return (
    <div className="container my-3" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextUtills gives you a way to analyze your text quickly and
              efficiently. Be it word count or character count.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextUtills is a free character counter tool that provides instant
              character count and words count statistics for a given text.
              TextUtills reports the number of words and characters . Thus it is
              suitable for writing text with words / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browser such as
              chrome,FireFox,Internet Explorer, Safari ,Opera . It suits to
              count chracters in facebook , blog, books, excel document,pdf
              document,eassays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
