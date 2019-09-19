import axios from 'axios';

const request = axios.create({
    baseURL: 'http://172.20.10.4:8080/api/',
});

export default request;
