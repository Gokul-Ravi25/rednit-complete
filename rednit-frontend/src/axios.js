import axios from "axios";

const instance = axios.create({
    baseURL:'https://rednit-backend.herokuapp.com',
});

export default instance;