import axios from "axios";

const instance = axios.create({
    baseURl: 'http://127.0.0.1:5001/naturally-crown/us-central1/api' 
    //The API cloud function URL
});

export default instance;