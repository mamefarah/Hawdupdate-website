import { defineCliConfig } from 'sanity/cli'
import 'dotenv/config'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: 'wnrpfl2o',
  deployment: {
    appId: 'r3axmx0tf5y4r02go2qrkfla',
  },
})
