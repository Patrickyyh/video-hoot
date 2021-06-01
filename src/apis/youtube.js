
import axios from "axios";
const KEY = 'AIzaSyD5YaIB-jYghjpLO33gomo8J5ceRTziakU';
export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
        part: 'snippet',
        type: 'video', 
        maxResult: 5, 
        key: KEY,
     }
});