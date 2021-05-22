import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios'; 
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{
    state =  {videos: [], selectedVideo: null}; 

    onSearch = async (term) =>{
        //we make Api request over here 
        const response = await youtube.get('search',
        {
            params: {
                q: term 
            }
        }
        );

        this.setState({
         videos: response.data.items
        ,selectedVideo: response.data.items[0]
        })
  
    };

    onVideoSelect = (video) =>{
            this.setState({selectedVideo: video}); 
    }






    render(){
        return(
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <SearchBar  trySearch = {this.onSearch}/>
                <div className = "ui grid">
                   <div className = "ui row">
                     <div className = "ten wide column"> 
                      <VideoDetail video = {this.state.selectedVideo}/>
                     </div> 
                    
                     <div className = "six wide column">
                       <VideoList  onVideoSelect = {this.onVideoSelect}
                        videos = {this.state.videos}/>
                     </div>
                   </div>
               </div>
            </div>

        );

    }


}


export default App;
