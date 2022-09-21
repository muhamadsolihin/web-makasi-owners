import axios from "axios";
import { computed } from "vue";
import store from "@/store/index";
import { getModule } from "vuex-module-decorators";
import LoginModule from "./store/modules/LoginModule";

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
    const token = tokenId.value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default apiClient;

// apiClient.interceptors.request.use(
//   (config) => {
//     // const token = tokenId.value;
//     // if (token) {
//       config.headers.Authorization = `Bearer ${window.localStorage.getItem('id_token') ? window.localStorage.getItem('id_token') : ''}`;
//     // }
//     return config;
//   },
//   (error) => {
//     const auth = getModule(LoginModule)
//     console.log(error)
//     if (error.response.status === 401) {
//       console.log(error)
//       auth.SET_TOKEN_ID("")
//       auth.postLogout()
//     }
//     return Promise.reject(error);
//   }
// );


// export default apiClient;

// apiClient.interceptors.request.use(
//   (response) => {
//     console.log(response)
//     return response
//   },
//   (error) => {
//     const auth = getModule(LoginModule)
//     console.log(error)
//     if (error.response.status === 401) {
//       console.log(error)
//       auth.SET_TOKEN_ID("")
//       // auth.postLogout()
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
