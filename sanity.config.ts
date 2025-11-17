import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import mission from "./sanity/schemas/mission";
import vision from "./sanity/schemas/vision";
import about from "./sanity/schemas/about";
import services from "./sanity/schemas/services";
import team from "./sanity/schemas/team";
import projects from "./sanity/schemas/projects";
import homepage from "./sanity/schemas/homepage";

export default defineConfig({
  name: "hawdclimateguardian",
  title: "Hawd Climate Guardian CMS",

  projectId: "wnrpf1zo",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [mission, vision, about, services, team, projects, homepage],
  },
});

