import axios from "axios";

const API = axios.create({
  baseURL: "https://log-engine-website-frontend-backend.onrender.com/api"
});

export default API;