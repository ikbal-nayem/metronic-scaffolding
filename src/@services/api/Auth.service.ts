import {axiosIns} from '@config/api.config'
import {ADMIN_SERVICE} from '@constants/server-route.constant'

export interface ILoginPayload {
  userName: string
  password: string
}

export const AuthService = {
  login: async (loginPayload: ILoginPayload): Promise<any> =>
    await axiosIns.post(ADMIN_SERVICE + '/auth/public/login', loginPayload),

  // signOut: async (payload): Promise<any> => await apiIns.post('admin-service/sign-out', payload),
}
