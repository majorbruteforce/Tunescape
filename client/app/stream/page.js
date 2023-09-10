"use client"
import React, { useEffect } from 'react'
import "./stream.css"
import StreamCard from '@/components/StreamCard'
import axios from "axios"

const page = () => {
  
  const apiUrl = `http://localhost:3080/get-buffer?number=5`

  useEffect(()=>{
    const fetchData = async()=>{
      data = await axios.post(apiUrl);
      console.log("data =" + data.data);
    }
    fetchData();
  },[])
  
  return (
    <div className='HOLDER'>
      <div style={{ display: 'flex' }} className='image__container'>
        <div>
        <img draggable='false' style={{ marginRight: "34rem" }} className='main__image' src='https://s3-alpha-sig.figma.com/img/badf/e7ce/9fb6cdb18355919755bbe5bdce881b9f?Expires=1694390400&Signature=j7H-UzlnVFjSyAdfEOISuRQzdKFCL-y-8v7GNh2Ul6sUkZhg591gHntEiJie55O8mG1BTpZzZMZB4~r2V1IEffpX-bxoGLcCHl4-rwiC8nmO18Pkd3DK-sI83U~86-XthVPPsFbdd8lCMjgUyS2OeKgtpQD8CXrC~qARRetYP5sXk6CM-ARv-RdRqjii6ZmhClwFtsRpRoCm7wBuFz~vryjuGZx79JkZlNXGIiEIGxYp5sRb4AdXLXL95OBo~9~7rOzuU8Ga9JdvYJYt1Bd1~9I1SQOGe9yiq9gE-57hy3Sg-i-lmnMOQWgKL9XqFxn1ONO7KHlsi9sF5qR3b08nyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        <h1 className='master__name'>Song Name</h1>
        <h1 className='master__artist'>Artist Name</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="450" viewBox="0 0 2 450" fill="none">
          <path d="M1 0V450" stroke="white" />
        </svg>
        <div style={{marginBottom:"2rem"}}>
        <StreamCard Song="Count Me Out" Artist="Kendrick Lamar" Time="5:06" Like="90"/>
        <StreamCard Song="Yevevo" Artist="Various Artists" Time="2:50" Like="90"/>
        <StreamCard Song="Count Me Out" Artist="Kendrick Lamar" Time="5:06" Like="90"/>
        <StreamCard Song="Teri Chuddio ki khankhan" Artist="Kendrick Lamar" Time="5:06" Like="90"/>
        <StreamCard Song="N95" Artist="Kendrick Lamar" Time="5:06" Like="90"/>
        </div>
      </div>
    </div>
  )
}

export default page
