import Constants from "expo-constants";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://0edd-179-190-114-125.ngrok.io",
    timeout: 2000
});

