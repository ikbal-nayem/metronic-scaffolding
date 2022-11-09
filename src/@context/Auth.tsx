import {USER_AUTH} from '@constants/auth.constant'
import {IAuthResp, IUserInfoResp} from '@interface/auth.interface'
import {LocalStorageService} from '@services/utils/localStorage.service'
import {WithChildren} from 'helpers'
import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {isExpiredToken} from 'utility/jwt'
import * as authHelper from '../@modules/auth/core/AuthHelpers'

type AuthContextProps = {
  auth: IAuthResp | undefined
  isAuthenticated: boolean
  saveAuth: (auth: IAuthResp | undefined, cUser: IUserInfoResp | undefined) => void
  currentUser: IUserInfoResp | undefined
  setCurrentUser: Dispatch<SetStateAction<IUserInfoResp | undefined>>
  logout: () => void
}

const isValidToken = () => {
  return true
  const userAuth: IAuthResp = LocalStorageService.get(USER_AUTH)
  if (!userAuth) return false
  return !isExpiredToken(userAuth?.accessToken)
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth()?.auth,
  isAuthenticated: false,
  saveAuth: () => {},
  currentUser: authHelper.getAuth()?.cUser,
  setCurrentUser: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const initAuth = authHelper.getAuth()
  const [auth, setAuth] = useState<IAuthResp | undefined>(initAuth?.auth)
  const [currentUser, setCurrentUser] = useState<IUserInfoResp | undefined>(initAuth?.cUser)
  const [isAuthenticated, makeAuthenticated] = useState<boolean>(isValidToken())

  useEffect(() => {
    setInterval(() => {
      const isValid = isValidToken()
      if (!isValid) {
        makeAuthenticated(isValid)
        logout()
      }
    }, 5000)
  }, [])

  const saveAuth = (auth: IAuthResp | undefined, cUser: IUserInfoResp | undefined) => {
    setAuth(auth)
    setCurrentUser(cUser)
    if (auth) {
      authHelper.setAuth(auth, cUser)
      makeAuthenticated(true)
    } else {
      authHelper.removeAuth()
      makeAuthenticated(false)
    }
  }

  const logout = () => {
    saveAuth(undefined, undefined)
  }

  return (
    <AuthContext.Provider
      value={{auth, isAuthenticated, saveAuth, currentUser, setCurrentUser, logout}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, useAuth}
