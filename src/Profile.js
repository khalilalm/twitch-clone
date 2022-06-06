import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'
const Profile = () => {
    return (
        <div className="profile">
            <div className="profile_topLeft">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/039b8034-2b66-4d30-97ec-15bf08f219d9-profile_image-300x300.png" />
                <div className="profile_topLeftDetails"> 
                    <h1>ImperialHal</h1>
                    <h3>100K followers</h3>
                </div>
            </div>
            <div className="profile_topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile_menu">
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile_recent">
                <h2>Recent Broadcast</h2>
                <div className="profile__recentItems">
                    <RecentItem 
                        url={'https://www.youtube.com/watch?v=ZcwI9-efSQw'}
                        title={'Call Me ImperialGibraltar From Now On'}
                        />
                          <RecentItem 
                        url={'https://www.youtube.com/watch?v=ZcwI9-efSQw'}
                        title={'Call Me ImperialGibraltar From Now On'}
                        />
                          <RecentItem 
                        url={'https://www.youtube.com/watch?v=ZcwI9-efSQw'}
                        title={'Call Me ImperialGibraltar From Now On'}
                        />
                          <RecentItem 
                        url={'https://www.youtube.com/watch?v=ZcwI9-efSQw'}
                        title={'Call Me ImperialGibraltar From Now On'}
                        />
                </div>
                <div className="profile__categories">
                    <h2>ImperialHal's recently streamed Categories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Profile
