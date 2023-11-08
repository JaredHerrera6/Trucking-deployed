import axios from "axios"

//NODE_ENV  = 'development '
//NDOE_ENV = 'production'

//if we are in production baseurl = /api/v1
//Else baseurl = "http://localhost:3005/api/v1"

//const baseURL = "http://localhost:3005/api/v1"

const BaseURL = process.env.REACT_APP_SERVERURL

export default axios.create({
    BaseURL,
})
//This Will Serve as our base URL