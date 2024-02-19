import React, { useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from "react-icons/ai"
import LockScreenImg from './images/moon.jpg'
import HomeScreenImg from './images/home.jpg'



const SlideToUnlock = () => {
  // states
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover`
  })
  const [showLockSlider, setShowLockSlider] = useState(true)
  const [lockSliderValue, setLockSliderValue] = useState(0)

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value)
    setShowLockSlider(false)
  }

  // styles
  const containerStyle = {
    height: "70vh",
    marginTop: "15vh",
    width: 340,
    border: "4px solid #000",
    background: uiProps.uiBg,
  }

  return (
    <div className='container text-center d-flex flex-column border-20' style={containerStyle}>
      <h1 className='title' style={{color: uiProps.uiColor}}>{uiProps.uiText}</h1>
      {showLockSlider ? <LockSlider width={"250px"} handleInput={handleLockSliderInput} value={lockSliderValue} /> : <AiFillUnlock className='unlockIcon'/>}
    </div>
  )
}

export default SlideToUnlock
