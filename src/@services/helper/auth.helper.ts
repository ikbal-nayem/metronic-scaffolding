import {ACCESS_TOKEN, USER_ID, USER_INFO} from '@constants/auth.constant'
import {IUserInfo} from '@interface/auth.interface'
import {LocalStorageService} from '@services/utils/localStorage.service'

type GetAuthProps = {accessToken: string | null; uid: string | null; uInfo: IUserInfo | null}

const getAuth = (): GetAuthProps => {
  if (!localStorage) {
    return
  }

  const token: string | null = LocalStorageService.get(ACCESS_TOKEN)
  const uid: string | null = LocalStorageService.get(USER_ID)
  const lsUser: IUserInfo = LocalStorageService.get(USER_INFO)
  if (!token || !uid || !lsUser) return

  try {
    const cUser: IUserInfo = lsUser as IUserInfo
    return {accessToken: token, uid, uInfo: cUser}
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (token: string | null, uid: string | null) => {
  try {
    LocalStorageService.set(ACCESS_TOKEN, token)
    LocalStorageService.set(USER_ID, uid)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) return

  try {
    localStorage.removeItem(USER_ID)
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(USER_INFO)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export {getAuth, setAuth, removeAuth}
