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

  // Google Site Verification ID from environment variable
  const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Hawd Climate Guardian Initiative",
    "url": defaultSiteUrl,
    "logo": `${defaultSiteUrl}/logo.png`,
    "description": defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dolow",
      "addressRegion": "Gedo",
      "addressCountry": "Somalia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "general inquiries",
      "email": "info@hawdclimateguardian.org"
    }
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:url" content={pageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />

      {/* Google Site Verification */}
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default Seo
