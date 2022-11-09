import {LOGIN} from '@constants/internal-route.constant'
import {IAppRoutes} from '@interface/common.interface'
import {lazy} from 'react'

const Login = lazy(() => import('@modules/auth/components/Login'))
const ForgotPassword = lazy(() => import('@modules/auth/components/ForgotPassword'))

export const AuthRoutes: IAppRoutes[] = [
  {
    link: 'login',
    element: Login,
  },
  {
    link: 'forgot-password',
    element: ForgotPassword,
  },
  {
    link: '',
    redirect: LOGIN,
  },
]
