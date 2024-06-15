import React,{useState,useContext} from 'react'
import {Context} from '../Context';

function Home() {
  const [input,setInput]=useState("");
  const {theme,heading,textSummary,preview,showAlert}=useContext(Context);
  const handleChange=((e)=>{
    setInput(e.target.value);
  })
  const handleClickToUpperCase=()=>{
   setInput(input.toUpperCase());
   showAlert("text converted to upperCase letter","success")
  }
  const handleClickToLowerCase=()=>{
    setInput(input.toLowerCase());
    showAlert("text converted to lowerCase letter","success")

  }
  const handleClearText=()=>{
    setInput("")
    showAlert("text Clear","success")

  } 
  const handleCopyText= async()=>{
      await navigator.clipboard.writeText(input)
      showAlert("text Copy","success")

  }
  const handleSpaces=()=>{
    let extraSpace=input.split(/[ ]+/);
    setInput(extraSpace.join(" "));
    showAlert("text extra spaces are removed","success")

  }
  return (
    <div>
      <div className="container">
        <h1 className={`heading text-${theme?"black":"white"}  text-center`}>{heading}</h1>
        <div className="mt-5">
          <textarea 
          className={`form-control textHeight border border-secondary-subtle bg-${theme?"white":"primary"} text-${theme?"black":"white"}`}
          id="exampleFormControlTextarea1" 
          rows="3"
          value={input}
          onChange={handleChange}
          >
          </textarea>
        </div>
        <button disabled={input.length===0} type="button" class="btn btn-primary mt-2 mx-2" onClick={handleClickToUpperCase}>Convert to upperCase</button>
        <button disabled={input.length===0}type="button" class="btn btn-primary mt-2 mx-2" onClick={handleClickToLowerCase}>Convert to LowerCase</button>
        <button disabled={input.length===0}type="button" class="btn btn-primary mt-2 mx-2" onClick={handleClearText}>Clear Text</button>
        <button disabled={input.length===0}type="button" class="btn btn-primary mt-2 mx-2" onClick={handleCopyText}>CopyText</button>
        <button disabled={input.length===0} type="button" class="btn btn-primary mt-2 mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
      </div>

      <div className={`container text-${theme?"black":"white"}`}>
      <h1 className='mt-3'>{textSummary}</h1>
      <p className=''>{`${input.split(/\s+/).filter((elem)=> (elem.length!=0)).length} words and ${input.length} characters`}</p>
      <p className=''>{0.008 * input.split(/\s+/).filter((elem)=> (elem.length!=0)).length} reading time</p>
      <h1 className=''>{preview}</h1>
      {input}
      </div>
    </div>
  )
}

export default Home
