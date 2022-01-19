import axios from 'axios';

const KEY = 'AIzaSyA2tjz8tSHm4ZlgxiYg7hFL870-fvcT5gA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})