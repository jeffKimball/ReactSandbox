import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

const Blog = ({ theme }) => {
  return (
    <div className='container'>
        <Title text={`My Blog With ${theme} Theme`}/> 
        <span style={{position: "absolute", top:10, right: 10}}>
            <Button text={"theme"}/>
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure odit ducimus corrupti quam, commodi inventore id ipsum non tenetur blanditiis, omnis ad voluptates sapiente reprehenderit sed fuga quaerat velit.</p>
    </div>
  )
}

export default Blog