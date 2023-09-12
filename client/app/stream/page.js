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

const page = () => {

  const songTitle= document.getElementById('master__name');
  const artistName= document.getElementById('master__artist');
  const songThumbnail= document.getElementById('main-image')
  const queue= document.getElementById('buffer-queue')
  const songMedia = document.getElementById('song');
  const progressBar = document.getElementById('seeker-bar');
  const volumeBar = document.getElementById('volume-seeker');
  
  console.log(artistName)
  // let songList = []
  // let currentIndex = 0;
  
  // async function getSongList(){
  
  //   await fetch('https://tunescape-test-backend.onrender.com/buffer-stream-to-fetch-song')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data=>{
  //       songList= data;
  //       playSong();
  //       // song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`
  //       songList.forEach(song => {
  //         let card= createCardElement(song);
  //         queue.appendChild(card);
          
  //       })
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  
  
  // getSongList();
  
  
  // window.addEventListener('load',()=>{
  //   progressBar.value=0;
  // })
  
  // songMedia.addEventListener('ended', () => {
  //   playNext();
  // })
  
  
  // // Updates the value of the progress bar
  
  // songMedia.addEventListener('timeupdate', () => {
  //   const currentTime = songMedia.currentTime;
  //   const duration = songMedia.duration;
  //   const progress = parseFloat(currentTime / duration) * 100;
  //   progressBar.value = progress || 0;
  // });
  
  // // Update music playback position when progress bar is changed
  // progressBar.addEventListener('input', () => {
  //   const progress = progressBar.value;
  //   const duration = songMedia.duration;
  //   const currentTime = (progress / 100) * duration;
  
  //   songMedia.currentTime = currentTime;
  // });
  
  // // Handles play and pause
  // function playPause(event) {
  
  //   if (event.target.id === 'play') {
  //     songMedia.play();
  
  //     document.getElementById('play').style.display = 'none';
  //     document.getElementById('pause').style.display = 'inline-block';
  //   }
  //   else {
  //     songMedia.pause();
  //     document.getElementById('play').style.display = 'inline-block';
  //     document.getElementById('pause').style.display = 'none';
  //   }
  
  // }
  
  // // Handles volume functionalities
  // volumeBar.addEventListener('input', () => {
  //   const volume = (volumeBar.value) / 100;
  
  //   songMedia.volume = volume;
  // })
  
  // function playNext() {
  
  //   if (currentIndex === (songList.length - 1)) {
  //     currentIndex = 0;
  //   }
  //   else {
  //     currentIndex++;
  //   }
  //   playSong();
  //   // song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
  //   // song.play();
  
  // }
  
  // function playPrevious() {
  
  //   if (song.currentTime < 2) {
  
  //     if (currentIndex == 0) {
  //       currentIndex = songList.length - 1;
  //     }
  //     else {
  //       currentIndex--;
  //     }
  //     // song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
  //     // song.play();
  
  //     playSong();
  //   }
  //   else {
  //     song.currentTime = 0;
  //   }
  // }
  
  
  // function createCardElement(song) {
  //   const cardDiv = document.createElement('div');
  //   cardDiv.classList.add('stream-right-song');
  
  //   const thumbnail = document.createElement('img');
  //   thumbnail.src = `https://d1uzpajnrcv6ws.cloudfront.net/${song.ThumbnailHash}`;
  //   // thumbnail.alt = '.\client\public\assets\alt-cover.png';
  //   thumbnail.id = 'thumbnail-right';
  
  //   // const detailsDiv = document.createElement('div');
  //   // detailsDiv.classList.add('queue-song-details');
  
  //   const songName = document.createElement('div');
  //   songName.classList.add('song-name-stream-right');
  //   songName.textContent = song.Title;
  
  //   const artistName = document.createElement('div');
  //   artistName.classList.add('artist-name-stream-right');
  //   artistName.textContent = song.Artist;
  
  //   // const songViews = document.createElement('span');
  //   // songViews.classList.add('song-views');
  
  //   const likes = document.createElement('img');
  //  likes.src = 'assets/like.png';
  
  
  //   const duration= document.createElement('div');
  //   duration.classList.add('duration');
  //   // duration.textContent = convertDuration(songMedia.duration);
  //   duration.textContent = '3:56';
    
  
  //   // songViews.appendChild(playImg);
  //   // songViews.appendChild(playsCount);
  
  //   // detailsDiv.appendChild(songName);
  //   // detailsDiv.appendChild(artistName);
  //   // detailsDiv.appendChild(songViews);
  //   cardDiv.appendChild(thumbnail);
  //   cardDiv.appendChild(songName)
  //   cardDiv.appendChild(artistName);
  //   cardDiv.appendChild(likes);
  //   cardDiv.appendChild(duration);
  
  //   return cardDiv;
  // }
  
  
  // function playSong(){
  //   song.src = `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].SongHash}`;
  //   songThumbnail.src= `https://d1uzpajnrcv6ws.cloudfront.net/${songList[currentIndex].ThumbnailHash}`;
  //   songTitle.innerText= songList[currentIndex].Title;
  //   artistName.innerText= songList[currentIndex].Artist;
  //   songMedia.play(); 
  // }
  
  
  
  // function convertDuration(given_seconds) {
  //   console.log(given_seconds)
  //   const minutes = parseInt(given_seconds/60);
  //   const seconds = parseInt(given_seconds - 60*minutes);
  //   timeString = `${minutes}:${seconds}`
  
  //   return timeString;
  // }















  const [masterSong, setMasterSong] = useState({ "title": "Song Name", artist: "Artist" });
  const [songQueue, setSongQueue] = useState();
  const apiUrl = `http://localhost:3080/get-buffer?number=50`
  const AudioTag = useRef(null);
  const master__name = useRef(null);

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

  useEffect(() => {
    const element = AudioTag.current;
    const masterSong = master__name.current;
    console.log(element)

    if (element) {
      element.play();
      element.style.display = 'none'
    }
    masterSong.style.backgroundImage = `linear-gradient(90deg, #f7f7f7, ${colorArray[Math.floor(Math.random() * 39)]})`

  }, [masterSong])

  useEffect(() => {
    const fetchData = async () => {
      await axios.post(apiUrl)
        .then((response) => {
          // console.log("Fetch ke andar  = " , response.data) ;
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
          <h1 ref={master__name} className='master__name'>{masterSong?.title}</h1>
          <h1 className='master__artist'>{masterSong?.artist}</h1>
          <audio ref={AudioTag} controls src={masterSong?.musicSrc}></audio>
        </div>
        <div className='card__holder'>
          {
            songQueue?.map((song, index) => {
              return <StreamCard setMasterSong={setMasterSong} key={song.uid} Song={song.title} musicSrc={song.musicHash} imgSrc={song.thumbnailHash} Artist={song.artist} Time="5:06" Like={song.like} />
            })
          }
        </div>
      </div>

      <div class="media-player ">
        <input type="range" id="seeker-bar" value="0" min="0" max="100" step="0.1" />
        <div class="media">
          <div className="false"></div>
          <div class="media-buttons">
            <Image src={random} alt="" class="randomize" />
            <Image src={prevtrack} alt="" onclick="playPrevious()" class="previous" />
            <Image src={play} alt="" onclick="playPause(event)" id="play" class="play-pause" />
            <Image src={pause} alt="" onclick="playPause(event)" id="pause" style={{display:"none"}} class="play-pause" />
            <Image src={nexttrack} alt="" onclick="playNext()" class="next" />
            <Image src={repeat} alt="" class="repeat" />
          </div>
          <div class="volume">
            <Image src={volume} alt="" />
                    <input type="range" value="100" min="0" max="100" id="volume-seeker" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
