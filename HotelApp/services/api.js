import axios from "axios";

export const api = axios.create({
    //"https://relaxh-server.herokuapp.com"
    baseURL: "http://f22e-177-130-224-143.ngrok.io",
    timeout: 2000
});

