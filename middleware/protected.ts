import { auth } from '@/services/nhost'
import constantsConfig from '@/config/constants'
import routeConfig from '@/config/routes'

export default defineNuxtRouteMiddleware(async () => {
  const { value: refreshToken } = useCookie(constantsConfig.refreshTokenCookieName)
  if (refreshToken) return navigateTo(routeConfig.home)
})
