import { setCookie } from '~~/helpers/browser/cookie'
import { getLocalStorage } from '~~/helpers/browser/storage'
import constantsConfig from '@/config/constants'

const setAuthCookieEvent = () => {
  const refreshTokenExpires = getLocalStorage('nhostRefreshTokenExpiresAt') as string
  const refreshToken = getLocalStorage('nhostRefreshToken') as string

  const expires = (new Date(Date.parse(refreshTokenExpires))).toUTCString()
  setCookie(constantsConfig.refreshTokenCookieName, refreshToken, expires)
}

const authEvents = {
  setAuthCookieEvent,
}

export default authEvents