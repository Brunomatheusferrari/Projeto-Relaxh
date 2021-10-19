import axios from "axios";

export const api = axios.create({
    baseURL: "https://relaxh-server.herokuapp.com",
    timeout: 2000
});

