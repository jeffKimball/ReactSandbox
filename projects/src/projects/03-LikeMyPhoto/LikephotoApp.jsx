import React ,{ useState }from 'react'
import Title from '../components/Title'
import { GoSmiley, GoHeart, GoHeartFill } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa6";

import DogImg from "./images/dog.jpg"

const LikephotoApp = () => {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)

    const toggleLike = () =>{
        if(!like){
            setLike(true)
            setCount(count+1)
        }else {
            setLike(false)
            setCount(count-1)

        }
    }

  return (
    <div className='container text-center'>
        <Title text={"LikephotoApp"}/>
        <Title classes={"subtitle"} text={`Likes ${count}`}/>
        <div className="card card-dark m-auto shadow-sm" style={{width: 300, cursor:"pointer"}} onDoubleClick={toggleLike}>
            <div className="card-header fs-xl">
                <GoSmiley className='mr-2'/>
                <small>Doggy Dog</small>
            </div>
            <img src={DogImg} style={{height:"fit-content"}} />
            <div className="card-footer fs-xl d-flex" style={{justifyContent:"space-between"}}>
            <FaRegCommentDots />
            {like ? (<GoHeartFill onClick={toggleLike} className='text-danger'/>) : (<GoHeart onClick={toggleLike}/>)}
            </div>
        </div>
    </div>
  )
}

export default LikephotoApp