import {ACCESS_TOKEN, USER_ID} from '@constants/auth.constant'
import {LocalStorageService} from '@services/utils/localStorage.service'
import axios from 'axios'
import {ENV} from './ENV.config'

const instance = axios.create({
  baseURL: ENV.apiEndpoint,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

instance.interceptors.request.use(
  (config: any) => {
    const accessToken = LocalStorageService.get(ACCESS_TOKEN) || null
    const uid = LocalStorageService.get(USER_ID) || null

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
    if (uid) config.headers.uid = uid
    return config
  },
  (error) => {
    if (error.response) {
      return Promise.reject({
        ...error.response.data,
        ...{code: error.response.data.code || error.status},
      })
    }

    return Promise.reject({
      body: false,
      code: 404,
      msg: 'server not responding',
    })
  }
)

instance.interceptors.response.use(
  (res: any) => {
    if (res.data.code === 200) return {...res.data}

    if (res.data.code === 401) {
      LocalStorageService.clear()
      window.location.reload()
    }

    return Promise.reject({
      body: res.data.body,
      code: res.data.code,
      msg: res.data.msg,
    })
  },
  (error) => {
    if (error.response.data.code === 401) {
      LocalStorageService.clear()
      window.location.reload()
    }
    if (error.response) {
      if (error?.response?.data?.error) {
        return Promise.reject({
          code: error?.response?.data?.code,
          msg: error?.response?.data?.error,
          body: {},
        })
      }

      return Promise.reject({
        ...error.response.data,
        ...{code: error.response.data.code || error.status},
      })
    } else {
      return Promise.reject({
        code: 404,
        msg: 'server not responding',
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
