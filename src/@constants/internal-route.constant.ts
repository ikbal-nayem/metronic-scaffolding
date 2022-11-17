export const HOME = '/'

export const AUTH = '/auth'
export const LOGIN = AUTH + '/login'
export const SSO_LOGIN = AUTH + '/sso-login'

export const DASHBOARD = '/dashboard'

export const STORE = '/store'
export const STORE_OVERVIEW: Function = ({id}) => `${STORE}/${id}`
