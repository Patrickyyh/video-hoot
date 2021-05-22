import React from 'react';

const VideoDetail = (props) =>{
    if(!props.video){
        return <div>loading.....</div>
    }

    const videoSource = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
            <div>
                <div className = "ui embed">
                    <iframe src = {videoSource} />

                </div>
                <div className = "ui segment">
                    <h4 className  = "ui header"> {props.video.snippet.title} </h4>
         
                    <p> {props.video.snippet.description}</p>
                </div>
               
                
                </div>
        );
};

export default VideoDetail; 




