import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
      <IconButton className='sp__repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='sp__left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='sp__star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='sp__right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='sp__lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButtons