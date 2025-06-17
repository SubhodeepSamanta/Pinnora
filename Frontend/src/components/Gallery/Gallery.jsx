import React from 'react'
import './Gallery.css'
import GalleryItem from '../GalleryItem/GalleryItem';

const pins = [
  { id: 1, media: '/pins/pin1.jpeg', height: 1000, width: 1260 },
  { id: 2, media: '/pins/pin2.jpeg', height: 1200, width: 800 },
  { id: 3, media: '/pins/pin3.jpeg', height: 1080, width: 720 },
  { id: 4, media: '/pins/pin4.jpeg', height: 900, width: 600 },
  { id: 5, media: '/pins/pin5.jpeg', height: 1024, width: 768 },
  { id: 6, media: '/pins/pin6.jpeg', height: 1280, width: 720 },
  { id: 7, media: '/pins/pin7.jpeg', height: 1920, width: 1080 },
  { id: 8, media: '/pins/pin8.jpeg', height: 800, width: 600 },
  { id: 9, media: '/pins/pin9.jpeg', height: 1600, width: 1200 },
  { id: 10, media: '/pins/pin10.jpeg', height: 1400, width: 1260 },
  { id: 11, media: '/pins/pin11.jpeg', height: 1400, width: 1260 },
  { id: 12, media: '/pins/pin12.jpeg', height: 1260, width: 1260 },
  { id: 13, media: '/pins/pin13.jpeg', height: 1890, width: 1260 },
  { id: 14, media: '/pins/pin14.jpeg', height: 1260, width: 1260 },
  { id: 15, media: '/pins/pin15.jpeg', height: 1024, width: 768 },
  { id: 16, media: '/pins/pin16.jpeg', height: 800, width: 600 },
  { id: 17, media: '/pins/pin17.jpeg', height: 1280, width: 720 },
  { id: 18, media: '/pins/pin18.jpeg', height: 1920, width: 1080 },
  { id: 19, media: '/pins/pin19.jpeg', height: 1600, width: 1200 },
  { id: 20, media: '/pins/pin20.jpeg', height: 1400, width: 1260 },
  { id: 21, media: '/pins/pin21.jpeg', height: 1080, width: 720 },
  { id: 22, media: '/pins/pin22.jpeg', height: 900, width: 600 },
  { id: 23, media: '/pins/pin23.jpeg', height: 1024, width: 768 },
  { id: 24, media: '/pins/pin24.jpeg', height: 1280, width: 720 },
  { id: 25, media: '/pins/pin25.jpeg', height: 1920, width: 1080 },
];

const Gallery = () => {
  return (
    <div className='gallery'>
      {pins.map((pin)=>(
        <GalleryItem key={pin.id} item={pin} />
      ))}
    </div>
  )
}

export default Gallery