import React from 'react'
import "./streamCard.css"
const StreamCard = ({ Song, Artist, Time, Like, imgSrc,musicSrc, setMasterSong,uploadedBy }) => {

  const imgLink = `https://d1dgwvpmn80wva.cloudfront.net/${imgSrc}`;
  const musicLink = `https://d1dgwvpmn80wva.cloudfront.net/${musicSrc}`
  return (
    <div className='main__container' onClick={() => {setMasterSong({title:Song,artist:Artist,"time":Time,imgSrc:imgLink,like:Like,musicSrc:musicLink,uploadedBy:uploadedBy})}} >

      <img draggable='false' className='thumbnail__image' src={imgLink} alt="" />
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
