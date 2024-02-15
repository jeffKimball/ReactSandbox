import React, { useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from "react-icons/ai"

const SlideToUnlock = () => {
  const [showLockSlider, setShowLockSlider] = useState(true)
  return (
    <div className='container text-center d-flex flex-column border-20'
    style={{
      height:"70vh",
      marginTop: "15vh",
      width: 340,
      border: "4px solid #000",      
    }}>
      <h1 className='title'>Title</h1>
      {showLockSlider ? (<LockSlider width={"250px"}/>) :
                        (<AiFillUnlock className='unlockIcon'/>)
      }
      
      
    </div>
  )
}

export default SlideToUnlock