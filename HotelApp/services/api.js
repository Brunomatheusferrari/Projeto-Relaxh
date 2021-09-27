import Constants from "expo-constants";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://d35e-191-240-219-91.ngrok.io",
    timeout: 2000
});

