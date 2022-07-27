import axios from "axios";
import { computed } from "vue";
import store from "@/store/index";

export const tokenId = computed(() => store.getters.getTokenIdConfig);

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ` + tokenId.value
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // const token = tokenId.value;
    // if (token) {
      config.headers.Authorization = `Bearer ${tokenId.value}`;
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default apiClient;
