import type {PortableTextBlock} from '@sanity/types'
import {client, groq} from './sanityClient'

export interface SanityImageAssetRef {
  _type: 'reference'
  _ref: string
}

export interface SanityImage {
  _type: 'image'
  asset: SanityImageAssetRef
  alt?: string
}

export interface AboutDocument {
  _id: string
  title?: string
  body?: PortableTextBlock[]
  imageUrl?: string
}

export interface HomepageData {
  _id: string
  headline?: string
  subheadline?: string
  heroImageUrl?: string
}

export interface MissionDocument {
  _id: string
  title?: string
  description?: string
}

export interface VisionDocument {
  _id: string
  title?: string
  description?: string
}

export interface ServiceItem {
  _id: string
  name?: string
  description?: string
  iconUrl?: string
}

export interface TeamMember {
  _id: string
  name?: string
  role?: string
  bio?: string
  photoUrl?: string
}

export interface ProjectItem {
  _id: string
  title?: string
  description?: string
  location?: string
  imageUrl?: string
}

export function sanityHealthCheck(): Promise<string | null> {
  return client.fetch(groq`*[_type == "homepage"][0]._id`)
}

export function fetchAbout(): Promise<AboutDocument | null> {
  return client.fetch(
    groq`*[_type == "about"][0]{_id, title, body, "imageUrl": image.asset->url}`
  )
}

export function fetchHomepage(): Promise<HomepageData | null> {
  return client.fetch(
    groq`*[_type == "homepage"][0]{_id, headline, subheadline, "heroImageUrl": heroImage.asset->url}`
  )
}

export function fetchMission(): Promise<MissionDocument | null> {
  return client.fetch(groq`*[_type == "mission"][0]{_id, title, description}`)
}

export function fetchVision(): Promise<VisionDocument | null> {
  return client.fetch(groq`*[_type == "vision"][0]{_id, title, description}`)
}

export function fetchServices(): Promise<ServiceItem[]> {
  return client.fetch(
    groq`*[_type == "services"] | order(_createdAt asc) { _id, name, description, "iconUrl": icon.asset->url }`
  )
}

export function fetchTeam(): Promise<TeamMember[]> {
  return client.fetch(
    groq`*[_type == "team"] | order(_createdAt asc) { _id, name, role, bio, "photoUrl": photo.asset->url }`
  )
}

export function fetchProjects(): Promise<ProjectItem[]> {
  return client.fetch(
    groq`*[_type == "projects"] | order(_createdAt desc) { _id, title, description, location, "imageUrl": image.asset->url }`
  )
}
