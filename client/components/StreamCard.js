import React from 'react'
import "./streamCard.css"
const StreamCard = ({ Song, Artist, Time, Like, Src, setMasterSong }) => {

  const link = `https://d1dgwvpmn80wva.cloudfront.net/${Src}`;
  
  return (
    <div className='main__container' onClick={() => {setMasterSong({title:Song,artist:Artist,"time":Time,imgSrc:link,like:Like})}} >

      <img draggable='false' className='thumbnail__image' src={link} alt="" />
      <div style={{ display: "flex" }}>

        <h2 className='card__song'>{Song}</h2>
        <p className='card__artist'>{Artist}</p>
        <p className='card__time'>{Time}</p>
        <p className='card__like'>{Like}</p>
      </div>
    </div>
  )
}

export default StreamCard
