import {USER_AUTH} from '@constants/auth.constant'
import {LocalStorageService} from '@services/utils/localStorage.service'
import axios from 'axios'
import {ENV} from './ENV.config'

const instance = axios.create({
  baseURL: ENV.ApiEndpoint,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

instance.interceptors.request.use(
  (config: any) => {
    const accessToken = LocalStorageService.get(USER_AUTH)?.accessToken || null
    const uid = LocalStorageService.get(USER_AUTH)?.uid || null

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
    if (uid) config.headers.uid = uid
    return config
  },
  (error) => {
    if (error.response) {
      return Promise.reject({
        ...error.response.data,
        ...{status: error.response.data.status || error.status},
      })
    }

    return Promise.reject({
      body: false,
      status: 404,
      message: 'server not responding',
    })
  }
)

instance.interceptors.response.use(
  (res: any) => {
    if (res.data.status === 200) return {...res.data}

    if (res.data.status === 401) {
      LocalStorageService.clear()
      window.location.reload()
    }

    return Promise.reject({
      body: res.data.body,
      status: res.data.status,
      message: res.data.message,
    })
  },
  (error) => {
    if (error.response.data.status === 401) {
      LocalStorageService.clear()
      window.location.reload()
    }
    if (error.response) {
      // const { config, response } = error;
      // const originalRequest = config;

      if (error?.response?.data?.error) {
        return Promise.reject({
          status: error?.response?.data?.status,
          message: error?.response?.data?.error,
          body: {},
        })
      }

      return Promise.reject({
        ...error.response.data,
        ...{status: error.response.data.status || error.status},
      })
    } else {
      return Promise.reject({
        status: 404,
        message: 'server not responding',
        body: {},
      })
    }
  }
)

// const refreshToken = () => {
//   return instance.post("/auth/refresh-token");
// };
// const setToken = (accessToken: string) => {
//   LocalStorageService.set("accessToken", accessToken);
// };
// const setRefreshToken = (refreshToken: string) => {
//   LocalStorageService.set("refreshToken", refreshToken);
// };

export const axiosIns = instance
