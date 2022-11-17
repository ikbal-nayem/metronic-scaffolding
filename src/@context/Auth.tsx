import {USER_AUTH} from '@constants/auth.constant'
import {IAuthResp, IUserInfo} from '@interface/auth.interface'
import {LocalStorageService} from '@services/utils/localStorage.service'
import {WithChildren} from 'helpers'
import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {isExpiredToken} from 'utility/jwt'
import * as authHelper from '@services/helper/auth.helper'

type AuthContextProps = {
  isAuthenticated: boolean
  saveAuth: (auth: any, cUser: IUserInfo | undefined) => void
  currentUser: IUserInfo | undefined
  setCurrentUser: Dispatch<SetStateAction<IUserInfo | undefined>>
  logout: () => void
}

const isValidToken = () => {
  return true
  const userAuth: IAuthResp = LocalStorageService.get(USER_AUTH)
  if (!userAuth) return false
  return !isExpiredToken(userAuth?.accessToken)
}

const initAuthContextPropsState = {
  isAuthenticated: false,
  saveAuth: () => {},
  currentUser: authHelper.getAuth()?.uInfo,
  setCurrentUser: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const initAuth = authHelper.getAuth()
  const [currentUser, setCurrentUser] = useState<IUserInfo | undefined>(initAuth?.uInfo)
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

  const saveAuth = (auth: IAuthResp | undefined, cUser: IUserInfo | undefined) => {
    setCurrentUser(cUser)
    if (auth) {
      authHelper.setAuth('cUser')
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
    <AuthContext.Provider value={{isAuthenticated, saveAuth, currentUser, setCurrentUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, useAuth}
