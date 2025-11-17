export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "body", type: "array", title: "Body", of: [{ type: "block" }] },
    { name: "image", type: "image", title: "Image" }
  ]
};

