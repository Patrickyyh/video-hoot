
import React from 'react';
import './VideoItem.css'; 

const VideoItem = props =>{
    // console.log(props);



    return (
        <div onClick = {() => {props.onVideoSelect(props.videoElement)}} className = "video-item item">
         <img className = "ui image"  src = {props.videoElement.snippet.thumbnails.medium.url} />
         <div className = "content">
            <div className = "header">{props.videoElement.snippet.title}</div>
         </div>
       </div>

    );
}


export default VideoItem;
