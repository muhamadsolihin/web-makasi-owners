import axios from "axios";
import router from "@/router";
import JwtService from "./core/services/JwtService";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ` + window.sessionStorage.getItem("tokenId")
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("id_token");
    if (token && config.headers != undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.code === 401) {
      JwtService.destroyToken();
      router.go(0);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
