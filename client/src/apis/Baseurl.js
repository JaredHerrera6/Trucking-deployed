import axios from "axios"

//NODE_ENV  = 'development '
//NDOE_ENV = 'production'

//if we are in production baseurl = /api/v1
//Else baseurl = "http://localhost:3005/api/v1"

//const baseURL = "http://localhost:3005/api/v1"

const baseURL = process.env.REACT_APP_SERVERURL

export default axios.create({
    baseURL,
    withCredentials: true

})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
//This Will Serve as our base URL