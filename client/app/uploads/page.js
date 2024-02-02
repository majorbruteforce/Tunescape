"use client"
import { useEffect, useState} from 'react'
import "./uploads.css"
import axios from 'axios';
import { UserAuth } from '../context/AuthContext';
const Page = () => {

    const [song,setSongName] = useState("");
    const [artist,setArtistName] = useState("");
    const [duration,setDuration ] = useState(null);
    const [sfile,setSFile] = useState({});
    const [tfile,setTfile] = useState({});
    const { user} = UserAuth();
    const apiUrl = "https://tunescape-mono-backend.onrender.com/upload";

    useEffect(()=>{
        console.log('sfile = ' , sfile);
    },sfile)

      const handleUploadClick = () => {
        alert("Posting...");
        const formData = new FormData();
        formData.append("title",song);
        formData.append("artist",artist);
        formData.append("uid",user?.uid);
        formData.append("music",sfile);
        formData.append("thumbnail",tfile);
        formData.append("uploadedBy",user?.displayName);
        formData.append("duration",duration);
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
          }
        axios.post(apiUrl, formData)
            .then((response) => {
                // console.log('Response from server:', response.data);
                alert("Success");
            })
            .catch((error) => {
                alert("Failure");
                console.error('Error:', error);
            });
    };

    return (
        <div className='main__container'>
            <h1 className='master__text'>Upload</h1>

            <div className='input__area'>
                <h1 className='song__text'>Song Name</h1>
                <input value={song} onChange={(e)=>{setSongName(e.target.value)}} type="text" name="" id="song_name" placeholder='"Mask Off..."' />
            </div>

            <div className='input__area'>
                <h1 className='song__text'>Artist Name</h1>
                <input value={artist} onChange={(e)=>{setArtistName(e.target.value)}} type="text" name="" id="song_name" placeholder='"Future"' />
            </div>

            <div className='input__area'>
                <h1 className='song__text'>Drop-da-Thumbnail</h1>
                <input type="file" name='thumbnail' onChange={(e)=>{setTfile(e.target.files[0])}} id="song_name" placeholder='"Future"' />
            </div>

            <div className='input__area'>
                <h1 className='song__text'>Drop-da-Song</h1>
                <input type="file" name="music" onChange={(e)=>{setSFile(e.target.files[0])}} id="song_name" placeholder='"Future"' />
            </div>

            <div className='input__area'>
                <h1 className='song__text'>Song Duration</h1>
                <input type='text' onChange={(e)=>{setDuration(e.target.value)}} id="song_name" placeholder='"3:40"' />
            </div>

            <div>
                <button type="submit" onClick={()=>{handleUploadClick()}}  className='upload'><h1>Upload!</h1></button>
            </div>
        </div>
    )
}

export default Page
