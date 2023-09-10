"use client"
import React, { useEffect, useState } from 'react'
import "./stream.css"
import StreamCard from '@/components/StreamCard'
import axios from "axios"

const page = () => {
  const [masterSong,setMasterSong] = useState({"title":"Song Name",artist:"Artist"});
  const [songQueue, setSongQueue] = useState();
  const apiUrl = `http://localhost:3080/get-buffer?number=50`

  useEffect(() => {
    const fetchData = async () =>{
      await axios.post(apiUrl)
      .then((response) => {
        console.log("Fetch ke andar  = " , response.data) ;
        setSongQueue(response.data);
      })
      .catch((error) => {
        alert("Failure");
        console.error('Error:', error);
      });
    }   
    fetchData();
  }, [])


  return (
    <div className='HOLDER'>
      <div style={{ display: 'flex' }} className='image__container'>
        <div>
          <img draggable='false' style={{ marginRight: "34rem" }} className='main__image' src={masterSong?.imgSrc} />
          <h1 className='master__name'>{masterSong?.title}</h1>
          <h1 className='master__artist'>{masterSong?.artist}</h1>
          <audio controls src={masterSong?.musicSrc}></audio>
        </div>
        <div className='card__holder'>
          {
            songQueue?.map((song,index)=>{
              return <StreamCard setMasterSong={setMasterSong} key ={song.uid} Song={song.title} musicSrc={song.musicHash} imgSrc={song.thumbnailHash} Artist={song.artist} Time="5:06" Like={song.like} />
          })
          }
        </div>
      </div>
    </div>
  )
}

export default page
