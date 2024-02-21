import React, { useState } from 'react'
import PopUp from '../components/PopUp.component'
import Button from '../components/Button'
import Title from '../components/Title'

const PopUPApp = () => {
  const [trigger, setTrigger] = useState(false)
  const triggerPopUp = () => {
    console.log("trigger popup")
    setTrigger(true)
  }

  return (
    <div className='text-center'>
        <Title text={"Click for popup, or wait 3 seconds"} />
        <Button btnClass={"btn-primary"} onClick={triggerPopUp}/>
        {trigger && <PopUp  
                        type={"alert-info"} 
                        title={"Triggered Popup"}
                        text={"This popup was triggered"}
                        handleClose={setTrigger}
                      />}
    </div>
  )
}

export default PopUPApp