import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  title?: string
  description?: string
  ogImageUrl?: string
  url?: string
}

const defaultTitle = 'Hawd Climate Guardian Initiative'
const defaultDescription =
  'Climate adaptation and livelihood resilience for the Gedo Zone.'
const defaultOgImage = '/og-hawdclimateguardian.svg'
const defaultSiteUrl = 'https://www.hawdclimateguardian.org'

const buildUrl = (providedUrl: string | undefined, path: string | undefined) => {
  if (providedUrl) return providedUrl
  const safePath = path && path !== '/' ? path : '/'
  return `${defaultSiteUrl}${safePath}`
}

const Seo = ({ title, description, ogImageUrl, url }: SeoProps) => {
  const location = useLocation()
  const pageTitle = title ?? defaultTitle
  const pageDescription = description ?? defaultDescription
  const pageUrl = buildUrl(url, location?.pathname)
  const pageOgImage = ogImageUrl ?? defaultOgImage

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
    </Helmet>
  )
}

export default Seo
