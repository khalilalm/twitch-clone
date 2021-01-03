import React from 'react'
import './Channel.css'

export const Channel = ({ avatar, name, followers}) => {
    return (
        <div className="channel">
            <div className="channel details">
                <img src={avatar} alt="avatar" />
                <p>{name}</p>
            </div>
            
        <p>🔴 {followers}</p>
        </div>
    )
}

export default Channel;