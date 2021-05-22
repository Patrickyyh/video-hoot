
import axios from "axios";
const KEY = 'AIzaSyBMLBQn2LB3BXXh0dol26sUVR3a81nCqSE';
export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
        part: 'snippet',
        type: 'video', 
        maxResult: 5, 
        key: KEY,
     }
});