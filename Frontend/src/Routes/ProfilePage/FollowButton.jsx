import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import apiRequest from '../../utils/apiRequest';

const FollowButton = ({isFollowing, username}) => {

    const handleFollow= async()=>{
        const res= await apiRequest.post(`users/follow/${username}`);
        return res.data;    
    }

    const queryClient= useQueryClient();

    const mutation = useMutation({
        mutationFn: handleFollow,
        onSuccess: ()=>{
          queryClient.invalidateQueries({ queryKey: ['profile',username] });
        }
  })

  return (
    <button onClick={() => mutation.mutate()} disabled={mutation.isPending}>{isFollowing? "Unfollow" : "Follow" }</button>
  )
}

export default FollowButton