export interface IUserInfo {
  user_id: string
  full_name: string
  mobile: string
  email: string
  is_email_verified: boolean
  is_mobile_verified: boolean
  companies: {
    companyId: string
    companyName: string
    roleName: string
  }[]
}
