import React from 'react'
import Alert from '../components/Alert'

const AlertApp = () => {

    

    return (
        <div className='container mx-auto'>
            <Alert type={"success"} message={"Successful Login"}/>
        </div>
        
    )
}

export default AlertApp