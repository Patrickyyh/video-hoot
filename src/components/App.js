import React , {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import axios from 'axios'; 
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = ()=>{

 const [selectedVideo, setSelectedVideo] = useState(null); 
 const [video, onSearch] =  useVideos('buildings'); 

 // setting up the video to display in the VideoDetail part 
// update when get a new list of videos 
 useEffect(()=>{
    setSelectedVideo(video[0]); 
 },[video]);



 return(
    <div className = "ui container" style = {{marginTop: '10px'}}>
        <SearchBar  trySearch = {onSearch}/>
        <div className = "ui grid">
           <div className = "ui row">
             <div className = "ten wide column"> 
              <VideoDetail video = {selectedVideo}/>
             </div> 
            
             <div className = "six wide column">
               <VideoList  onVideoSelect = {(video)=> setSelectedVideo(video)}
                videos = {video}/>
             </div>
           </div>
       </div>
    </div>

);
 }





export default App;
