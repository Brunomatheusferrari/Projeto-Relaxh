import axios from "axios";
import {API_URL, API_TOKEN} from "@env"

export const api = axios.create({
    baseURL: `${API_URL}`,
    timeout: 1000
});

api.interceptors.request.use(config => {
    
    const accessToken = `${API_TOKEN}`

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});





