export interface IAuthResp {
  accessToken: string
  uid?: string
}

export interface IUserInfoResp {
  userId: string
  designation: string
  roleCode: string
  roleName: string
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  sessionNo: string
  ip: string
}
