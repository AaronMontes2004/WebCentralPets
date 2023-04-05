import axios from "axios"

export const baseURL = axios.create({
    baseURL: "https://service-central-pets.onrender.com/api/"
    //baseURL: "http://localhost:4000/api/"
})