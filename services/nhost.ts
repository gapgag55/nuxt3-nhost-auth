import { NhostClient } from '@nhost/vue'

const nhost = new NhostClient({
  subdomain: 'klwlgekgfbmpcnxnkpir',
  region: 'ap-southeast-1'
})

export const auth = nhost.auth