import axios from "axios";


const instance = axios.create({
    baseURL: 'http://83.220.174.249:5345/api/',
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
    },
})

export default instance;