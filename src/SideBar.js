import React from 'react'
import Channel from './Channel'
import './Sidebar.css'
export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                 <h5>FOLLOWED CHANNELS</h5>
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/039b8034-2b66-4d30-97ec-15bf08f219d9-profile_image-300x300.png " name= "ImperialHal" followers="40k">

           </Channel>
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/39c054e3-3168-4e36-9cbb-73f3d4d469a7-profile_image-70x70.png" name= "GenBurten" followers="1.5k">

           </Channel>
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png " name= "Lirik" followers="24.1k">

           </Channel>
           
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/07580fe8-4509-4cbd-84b6-31732234e98c-profile_image-70x70.png " name= "iiTzTimmy" followers="16.2k">

           </Channel>
            <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png" name= "shroud" followers="17.1k">

           </Channel>
           
           <h5>RECOMMENDED CHANNELS</h5>
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/35ebe69d-9591-4a4e-a28a-d2da32bdb1a4-profile_image-70x70.png" name= "LuluLuvely" followers="1.9k">

           </Channel>
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/d5f82ba3-ea36-4340-aac3-557f6aae54e5-profile_image-70x70.png " name= "Lewda" followers="2.7k">

           </Channel>
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/9a6ed2ab-a714-4e04-9732-27e2fe6a1734-profile_image-70x70.png" name= "gent" followers="1.3k">

           </Channel>
           
           <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/ad6630c9-3cd4-4ef5-893b-d4fefdff2fc5-profile_image-70x70.png " name= "dooplex" followers="601">

           </Channel>
            <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/1fbea1f9-adbe-4c83-a0af-ffd4ff715d3e-profile_image-70x70.png" name= "Acie" followers="786">

           </Channel> 
           <p className="sidebar_topShowMore" >Show More</p> 
           <div className="sidebar_bottom">
               <div className="sidebar_bottomContainer">
                   <i className="fas fa-search"></i>
                   <input type="text" placeholder='Search to Add Friends'/>
               </div>

           </div>
            </div>
         
        </div>
    )
}

export default SideBar