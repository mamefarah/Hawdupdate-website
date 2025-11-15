import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({
  title = "Hawd Climate Guardian | Building Climate Resilience in Somalia",
  description = "Hawd Climate Guardian fosters sustainability and protects natural resources in Somalia's Gedo Zone through climate-smart agriculture, water conservation, and reforestation.",
  keywords = "climate resilience, Somalia, Gedo Zone, climate-smart agriculture, water conservation, reforestation, sustainable development, NGO",
  image = "/favicon.png",
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });
  }, [title, description, keywords, image]);

  return null;
};

export default SEO;
