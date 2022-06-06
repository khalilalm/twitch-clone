import React from 'react'
import "./RecentItem.css"
const RecentItem = ({url, title}) => {
    return (
        <div className="item">
            <iframe width="640" height="400" src="https://www.youtube.com/embed/ZaANopm3x3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="item_details">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0pcIIRzi4Wvz-nWYsBytg6W2GpRYbnD1oQ&usqp=CAU" />
                <div>
                    <h4>{title}</h4>
                    <p>ImperialHal</p>
                    <p>Apex Legends</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
