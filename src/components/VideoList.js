import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) =>{

    const renderedList =  props.videos.map((videoElement) => {

        return <VideoItem onVideoSelect = {props.onVideoSelect} key = {videoElement.id.videoId} videoElement = {videoElement}/>
    });

    
    return <div className = "ui relaxed divided list">{renderedList}</div>


    

};

export default VideoList; 