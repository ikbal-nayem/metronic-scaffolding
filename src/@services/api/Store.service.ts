import {axiosIns} from '@config/api.config'
import {ADMIN_SERVICE} from '@constants/server-route.constant'

export const StoreService = {
  getList: async (getListPayload): Promise<any> =>
    await axiosIns.post(ADMIN_SERVICE + '/stores/get-list', getListPayload),
}
