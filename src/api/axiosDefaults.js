import axios from "axios";

axios.defaults.baseURL = 'https://edenhub-060ed3b8a582.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true