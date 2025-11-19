import { createClient } from '@sanity/client'

const fallbackProjectId = 'wnrpfl2o'
const fallbackDataset = 'production'

export const SANITY_PROJECT_ID =
  import.meta.env.VITE_SANITY_PROJECT_ID || fallbackProjectId
export const SANITY_DATASET =
  import.meta.env.VITE_SANITY_DATASET || fallbackDataset
export const SANITY_STUDIO_URL =
  import.meta.env.VITE_SANITY_STUDIO_URL || 'https://wnrpfl2o.sanity.studio'

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: true,
})
