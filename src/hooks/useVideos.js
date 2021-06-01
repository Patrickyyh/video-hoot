import {useState,useEffect} from 'react'
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) =>{

    //setSelectedVideo(response.data.items[0]); 
    const [video,setVideo] =useState([]);

    useEffect(()=>{
        onSearch(defaultSearchTerm);
     },[defaultSearchTerm]); 



     const onSearch = async (term) =>{
        const response = await youtube.get('search',
            {
                params: {
                    q: term 
                }
            });
            setVideo(response.data.items);  
     }; 


     // return the videos and the function that are used to search the videos 
     return [video, onSearch]; 
    

};


export default useVideos; 

