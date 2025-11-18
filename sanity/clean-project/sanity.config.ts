import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: 'default',
  title: 'Hawd Climate Guardian',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],
})
