import { defineConfig } from 'sanity'
import 'dotenv/config'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Clean project',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  schema: {
    types: schemaTypes,
  },
})
