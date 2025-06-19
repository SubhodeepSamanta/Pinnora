import React from 'react'
import { Img } from '../ImageKit/Image'
import './Boards.css'
import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'
import { Link } from 'react-router'
import {format} from 'timeago.js'

const Boards = ({userId}) => {

    const {isPending, data, error}= useQuery({
        queryKey: ['boards',userId],
        queryFn: async () =>{ 
          const response= await apiRequest.get(`/boards/${userId}`);
          return response.data;
        }
      })
      if(isPending) return 'Loading...';
      if(error) return 'An error has occured'+error.message;
      if(!data) return 'No Boards found';
      console.log(data);
  return (
    <div className='collections'>
        { data.map((board)=>( 
            <Link to={`/search?boardId=${board._id}`} className="collection" key={board._id}>
            <Img src={board.firstPin.media}/>
            <div className="collection-info">
            <p>{board.title}</p>
            <span>{board.pinCount} Pins &#183; <span>{format(board.createdAt)}</span></span>
            </div>
        </Link>))}
    </div>
  )
}

export default Boards