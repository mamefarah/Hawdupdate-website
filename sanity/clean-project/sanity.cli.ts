import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.VITE_SANITY_PROJECT_ID ?? process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.VITE_SANITY_DATASET ?? process.env.SANITY_STUDIO_DATASET

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project configuration in environment variables')
}

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
