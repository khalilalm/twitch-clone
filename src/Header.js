import React from 'react'
import { Avatar } from '@material-ui/core'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img className="header_leftLogo" src="https://i.redd.it/76awrcvcm9i51.jpg" alt="twitch logo">
                </img>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header_verticalLine"></div>
                <h2>Esports</h2>
                <h2>Music</h2>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div className="header_center">
                <input type="text" placeholder="search"></input>
                <div className="header_centerLogoContainer">
                     <i class="fas fa-search"></i>
                </div>
            </div>

            <div className="header_right">
            <div className="header_rightContainer">
            <i class="fas fa-crown"></i>
            <i class="fas fa-inbox"></i>
            <i class="fas fa-comment-alt"></i>

            <div className="header_rightBits">
            <i class="fas fa-gem"></i>
            <h4>Get Bits</h4>
            </div>

            <Avatar />
                </div>
            </div>
        </div>
    )
    }


export default Header
