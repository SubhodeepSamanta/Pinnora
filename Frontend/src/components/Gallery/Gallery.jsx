import React from 'react'
import './Gallery.css'
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchPins= async({pageParam,search})=>{
  const pins= await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${search || ""}`);
  return pins.data;
}

const Gallery = ({search}) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    { 
      queryKey: ['pin',search], 
      queryFn: ({pageParam=0})=>fetchPins({pageParam,search}),
      initialPageParam: 0,
      getNextPageParam: (lastPage)=> lastPage.nextCursor
    });
  if(status==='error') return 'Something went wrong...';
  if(status==='pending') return 'Loading...';
  const allPins= data.pages.flatMap((page)=>page.pins);

  return (
      <InfiniteScroll dataLength={allPins.length} next={fetchNextPage} hasMore={!!hasNextPage} loader={<h4 className='scroll'> Loading more pins </h4>} endMessage={<h4 className='scroll'> All Pins Loaded </h4>} >
    <div className='gallery'>
      {allPins.map((pin)=>(
        <GalleryItem key={pin._id} item={pin} />
      ))}
    </div>
      </InfiniteScroll>
  )
}

export default Gallery