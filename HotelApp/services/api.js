import Constants from "expo-constants";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://ed60-177-200-213-98.ngrok.io",
    timeout: 2000
});

