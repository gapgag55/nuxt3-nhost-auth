import { NhostClient } from '@nhost/vue'

const nhost = new NhostClient({
  subdomain: '',
  region: ''
})

export const auth = nhost.auth
