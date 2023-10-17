import Image from 'next/image'
import Navbar from '@/components/Navbar'
import "./home.css"
export default function Home() {
  return (
    <div className='main__c'>
      <h1 class='music'>MUSIC</h1>
      <br />
      <br />
      <br />
      <br />
      <h2 className='byyou'>BY YOU.FOR YOU.</h2>
      <div className='main__header'>
        <h1>Join The Community.</h1>
        <div className='textual__data'>
          <h3 className='para__text'>Where melodies meet technology and where the world's music becomes a symphony of shared experiences. Whether you're looking for the latest hits or diving deep into the archives of timeless classics, Tunescape has something for every music aficionado, delivered with love, passion, and a touch of digital magic.</h3>
        </div>
        <h1>Power Of Cloud</h1>
        <div className='textual__data'>
          <p className='para__text'>At Tunescape, we believe that every beat, every note, and every rhythm has a story to tell. With our cutting-edge cloud-based infrastructure, we ensure that these musical tales find their way to your ears in their purest form. Say goodbye to the limitations of physical storage and hello to an expansive library that knows no bounds.</p>
        </div>
      </div>
    </div>
  )
}

