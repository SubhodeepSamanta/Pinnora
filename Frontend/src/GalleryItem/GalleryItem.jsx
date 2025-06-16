import React from 'react'
import './GalleryItem.css'

const GalleryItem = ({item}) => {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
        <img src={item.media} alt="pin" />
        <div className="overlay">
            <button className='save'>Save</button>
            <div className="overlayIcons">
                <img src="/general/share.svg" alt="" />
                <img src="/general/more.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default GalleryItem;