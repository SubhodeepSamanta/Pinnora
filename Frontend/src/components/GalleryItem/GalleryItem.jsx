import React from 'react'
import './GalleryItem.css'
import { Img } from '../ImageKit/Image';
import { Link } from 'react-router';

const GalleryItem = ({item}) => {
  const optimisedHeight= (364*item.height)/item.width;
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
        <Img
      src={item.media}
      height={optimisedHeight}
      width={364}
      alt="image"
      className="img"
    />
      <Link to={`/pins/${item._id}`}>
        <div className="overlay">
            <button className='save'>Save</button>
            <div className="overlayIcons">
                <Img src="/general/share.svg" alt="share" className="img" />
                <Img src="/general/more.svg" alt="more" className="img" />
            </div>
        </div>
        </Link>
    </div>
  )
}

export default GalleryItem;