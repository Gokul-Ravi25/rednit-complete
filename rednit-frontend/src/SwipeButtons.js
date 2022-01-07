import React from 'react';
import "./SwipeButtons.css";
import { Replay } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { StarRate } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
           
            <IconButton className="swipeButtons__favorite">
                <Favorite fontSize="large"/>
                 </IconButton>
            <IconButton className="swipeButtons__close">
                <Close fontSize="large"/>
                 </IconButton>
            <IconButton className="swipeButtons__repeat">
                <Replay fontSize="large"/>
                 </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRate fontSize="large"/>
                 </IconButton>
           
            <IconButton className="swipeButtons__lightning">
                <FlashOn fontSize="large"/>
                 </IconButton>
        </div>
    )
}

export default SwipeButtons
