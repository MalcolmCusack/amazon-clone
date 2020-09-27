import axios from 'axios';

const instance = axios.create({
    // API cloud functional URL
    baseURL: "https://us-central1-clone-924c0.cloudfunctions.net/api"
    //"http://localhost:5001/clone-924c0/us-central1/api"
});

export default instance;

// firebase deploy --only functions deploys backend

// npm run build

// firebase deploy --only hosting