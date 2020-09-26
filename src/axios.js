import axios from 'axios';

const instance = axios.create({
    // API cloud functional URL
    baseURL: 'http://localhost:5001/clone-924c0/us-central1/api'
});

export default instance;