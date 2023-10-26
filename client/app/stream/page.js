"use client"
import { useEffect, useRef, useState } from 'react'
import "./stream.css"
import StreamCard from '@/components/StreamCard'
import axios from "axios"
import random from "../public/randomize-white.png"
import prevtrack from "../public/previous-track-white.png"
import pause from "../public/pause-white.png"
import play from "../public/play-white.png"
import nexttrack from "../public/next-track-white.png"
import repeat from "../public/repeat-button-white.png"
import volume from "../public/volume.png"
import Image from "next/image";

const Page = () => {

  const [masterSong, setMasterSong] = useState({ "title": "Song Name", artist: "Artist" });
  const [songQueue, setSongQueue] = useState();
  const [playState, setPlayState] = useState(true);
  const [seekVal, setSeekVal] = useState(0);
  const [duration, setDuration] = useState(100);
  
  let [songID, setSongID] = useState(null);
  const apiUrl = `https://tunescape-backend-service.onrender.com/get-buffer?number=50`
  const AudioTag = useRef(null);
  const master__name = useRef(null);
  const seekerP = useRef(null);

  const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  /**
   * master Song is the current Playing song.which is 
   * being set by the state manager
   * @component StreamCard.js
   */

  useEffect(() => {
    const Audio = AudioTag.current;
    const masterSong = master__name.current;
  
    const handleLoadedMetadata = () => {
      if (Audio && Audio.duration && !isNaN(Audio.duration)) {
        setDuration(Audio.duration);
      }
    };

    if (Audio) {
      Audio.play();
      Audio.style.display = 'none';
      Audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      // Audio.addEventListener('ended',playNextTrack);
    }
  
    masterSong.style.backgroundImage = `linear-gradient(90deg, #f7f7f7, ${colorArray[Math.floor(Math.random() * 39)]})`;
  
    // Cleanup the event listener when the component unmounts
    return () => {
      if (Audio) {
        Audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [masterSong, duration]);
  
  useEffect(() => {
    const Audio = AudioTag.current;
    if (playState === true) Audio.play();
    else Audio.pause();
    Audio.addEventListener('timeupdate', () => {
      setSeekVal(Audio.currentTime/1);
    });

  }, [playState])


  useEffect(() => {
    const fetchData = async () => {
      await axios.post(apiUrl)
        .then((response) => {
          setSongQueue(response.data);
        })
        .catch((error) => {
          alert("Failure");
          console.error('Error:', error);
        });
    }
    fetchData();
  }, [])

  const handleSeek = (event) => {
    const newValue = event.target.value;
    console.log("newValue:",newValue)
    // console.log("dur" , AudioTag?.current?.duration/100);
    console.log("currTime:",AudioTag.current.currentTime)
    AudioTag.current.currentTime = newValue
    setSeekVal(prev=>{prev=newValue});
  };
  
  function playNextTrack() {
    if (songQueue) {
      if (songID >= songQueue.length) {
        setSongID(0);
      } else if (songID < 0) {
        setSongID(songQueue.length - 1);
      } else {
        console.log("songID ::", songID);
        const nextSong = songQueue[songID];
        const imgLink = `https://d1dgwvpmn80wva.cloudfront.net/${nextSong.thumbnailHash}`;
        const musicLink = `https://d1dgwvpmn80wva.cloudfront.net/${nextSong.musicHash}`;
        setMasterSong({
          title: nextSong.title,
          artist: nextSong.artist,
          time: nextSong.duration,
          imgSrc: imgLink,
          like: nextSong.like,
          musicSrc: musicLink,
          uploadedBy: nextSong.uploadedBy,
        });
      }
    }
  }

  
  useEffect(() => {
    playNextTrack();
  }, [songID])

  return (
    <div className='HOLDER'>
      <div style={{ display: 'flex' }} className='image__container'>
        <div>
          <img draggable='false' style={{ marginRight: "34rem" }} className='main__image' src={masterSong?.imgSrc} />
          <h1 ref={master__name} className='master__name'>{masterSong?.title}</h1>
          <h1 className='master__artist'>{masterSong?.artist}<br />Uploaded By: {masterSong?.uploadedBy}</h1>
          <audio ref={AudioTag} controls src={masterSong?.musicSrc}></audio>
        </div>
        <div className='card__holder'>
          {
            songQueue?.map((song, index) => {
              return <StreamCard setMasterSong={setMasterSong} testKey={index} key={index} Song={song.title} musicSrc={song.musicHash} imgSrc={song.thumbnailHash} Artist={song.artist} Time={song.duration} Like={song.like} uploadedBy={song.uploadedBy} />
            })
          }
        </div>
      </div>
      <div class="media-player ">
      <input ref={seekerP} type="range" id="seeker-bar" min="0" max={duration} step="0.1" onChange={handleSeek} value={seekVal} />
  
        <div class="media">
          <div className="false"></div>
          <div class="media-buttons">
            <Image src={random} alt="" class="randomize" />
            <Image src={prevtrack}  alt="" onClick={() => {setSongID(prev=>prev = --prev) }} class="previous" />
            {playState ? (<Image src={pause} alt="" onClick={() => setPlayState(prev => prev = !prev)} id="play" class="play-pause" />) : (<Image src={play} alt="" id="pause" onClick={() => setPlayState(prev => prev = !prev)} class="play-pause" />)}
            <Image src={nexttrack}  onClick={() => {setSongID(prev=>prev = ++prev) }} alt="" class="next" />
            <Image src={repeat} alt="" class="repeat" />
          </div>
          <div class="volume">
            <Image src={volume} alt="" />
            <input type="range" min="0" max="100" id="volume-seeker" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
