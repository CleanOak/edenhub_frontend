import axios from "axios";

axios.defaults.baseURL = 'https://edenhubbackend-1f7d010b86f9.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true


export const axiosReq = axios.create();
export const axiosRes = axios.create();