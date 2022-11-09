import {USER_AUTH, USER_INFO} from '@constants/auth.constant'
import {IAuthResp, IUserInfoResp} from '@interface/auth.interface'
import {LocalStorageService} from '@services/utils/localStorage.service'

const getAuth = (): {auth: IAuthResp | undefined; cUser: IUserInfoResp | undefined} => {
  if (!localStorage) {
    return
  }

  const lsValue: IAuthResp = LocalStorageService.get(USER_AUTH)
  const lsUser: IUserInfoResp = LocalStorageService.get(USER_INFO)
  if (!lsValue || !lsUser) return

  try {
    const auth: IAuthResp = lsValue as IAuthResp
    const cUser: IUserInfoResp = lsUser as IUserInfoResp
    if (auth && cUser) return {auth, cUser}
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: IAuthResp, cUser: IUserInfoResp) => {
  try {
    const lsValue = auth
    const lsUser = cUser
    LocalStorageService.set(USER_AUTH, lsValue)
    LocalStorageService.set(USER_INFO, lsUser)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) return

  try {
    localStorage.removeItem(USER_AUTH)
    localStorage.removeItem(USER_INFO)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

// export function setupAxios(axios: any) {
//   axios.defaults.headers.Accept = 'application/json'
//   axios.interceptors.request.use(
//     (config: {headers: {Authorization: string}}) => {
//       const auth = getAuth()
//       if (auth && auth?.auth?.accessToken) {
//         config.headers.Authorization = `Bearer ${auth?.auth?.accessToken}`
//       }

//       return config
//     },
//     (err: any) => Promise.reject(err)
//   )
// }

export {getAuth, setAuth, removeAuth}
