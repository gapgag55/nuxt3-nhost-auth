<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="email" type="email">
      <input v-model="password" type="password">
      <button type="submit">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
  import useAuthStore from '@/stores/auth'

  definePageMeta({ middleware: ['protected'] })

  const email = ref('email')
  const password = ref('password')

  const authStore = useAuthStore()

  const login = async () => {
    authStore.loginAction({ email: email.value, password: password.value })
  }
</script>