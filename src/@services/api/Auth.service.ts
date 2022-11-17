import {axiosIns} from 'config/api.config'

export const AuthService = {
  verifyToken: async (): Promise<any> => await axiosIns.get('/auth/verify-token'),
}
