interface IENV {
  appCode: string
  apiEndpoint: string
  envType?: string
  ssoURL?: string
}

export const ENV: IENV = {
  appCode: process.env.REACT_APP_CODE || '',
  envType: process.env.REACT_APP_ENV_TYPE || '',
  apiEndpoint: process.env.REACT_APP_GETWAY || '',
  ssoURL: process.env.REACT_APP_SSO_URL || '',
}
