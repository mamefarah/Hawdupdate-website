import {createClient} from '@sanity/client'
import groq from 'groq'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'wnrpf12o'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

export {groq}
