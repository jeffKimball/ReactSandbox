
import React, { useState } from 'react'
import Title from './components/Title'


function SignatureApp() {
  const inputStyle={
    border:"none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0"
  }
  document.body.style.background = "#eee"


  const [name, setName] = useState("")
  const [date, setDate] = useState("seelct a date")

  const handleNameChange = (e) =>{
    setName(e.target.value.toUpperCase())
  }
  const handleDateChange = (e) =>{
    setDate(e.target.value.toUpperCase())
  }

  

  return (
    <div className='container text-center'>
      <Title classes={"title"} text={name}/>
      <Title classes={"main-title"} text={date}/>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde temporibus voluptatem harum vel ipsa sapiente quas possimus illo iure fugiat, animi impedit, magni corporis ut quia amet et at eos.        
      </p>
      <footer className='d-flex' style={{justifyContent:"space-around", position:"relative", top:"40vh"}}>
        <input type="date" value={date}  onChange={handleDateChange} style={inputStyle}/>
        <input type="text" value={name} onChange={handleNameChange} style={inputStyle}/>
      </footer>

    </div>
  )
}

export default SignatureApp