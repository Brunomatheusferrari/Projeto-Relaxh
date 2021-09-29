import Constants from "expo-constants";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://392c-191-240-218-3.ngrok.io",
    timeout: 2000
});

