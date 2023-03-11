import { auth } from '@/services/nhost'
import constantsConfig from '@/config/constants'
import routeConfig from '@/config/routes'

export default defineNuxtRouteMiddleware(async () => {
  const { value: refreshToken } = useCookie(constantsConfig.refreshTokenCookieName)
  if (!refreshToken) return navigateTo(routeConfig.login)
  
  await auth.refreshSession(refreshToken as string | undefined)
  if (!await auth.isAuthenticatedAsync()) return navigateTo(routeConfig.login)
})