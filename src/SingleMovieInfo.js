import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovieInfo = () => {
  const {id} = useParams(); // id get 
  return <>
    <div>
    Our Sinfle Movie SingleMovieInfo {id}
    </div>
  </>
}

export default SingleMovieInfo
