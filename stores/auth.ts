import { defineStore } from 'pinia'
import { auth } from '@/services/nhost'
import authEvents from '@/events/auth'
import routesConfig from '~~/config/routes'

interface LoginPayload {
  email: string
  password: string
}

const loginAction = async (payload: LoginPayload) => {
  const res = await auth.signIn(payload)
  if (!res.session) return 

  authEvents.setAuthCookie()
  navigateTo(routesConfig.home)
}

export default defineStore('auth', {
  state: () => ({ isLoading: false }),
  actions: { loginAction },
})
