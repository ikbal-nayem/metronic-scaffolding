export const AUTH = '/auth'
export const LOGIN = AUTH + '/login'
export const DASHBOARD = '/dashboard'

export const STORE = '/store'
export const STORE_OVERVIEW: Function = ({id}) => `${STORE}/${id}`
