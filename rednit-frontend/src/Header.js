import React from 'react';
import "./Header.css";
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
    return (
        <div className="header">
       
            <IconButton> 
                 <AccountCircleIcon fontSize="large" className="header_icon"/>
            </IconButton>  
            <IconButton> <img
        className="header_logo"
        src="https://www.pinclipart.com/picdir/big/556-5563177_hands-making-a-heart-clipart-png-download-free.png"
        alt=""
        />
                </IconButton> 
       
        <IconButton>
            <ForumIcon/>
        </IconButton>
           

        </div>
    )
}

export default Header;
