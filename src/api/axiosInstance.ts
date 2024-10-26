import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dog.ceo/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
