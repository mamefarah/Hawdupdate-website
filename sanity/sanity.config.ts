import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import mission from "./schemas/mission";
import vision from "./schemas/vision";
import about from "./schemas/about";
import services from "./schemas/services";
import team from "./schemas/team";
import projects from "./schemas/projects";
import homepage from "./schemas/homepage";

export default defineConfig({
  name: "hawdclimateguardian",
  title: "Hawd Climate Guardian CMS",

  projectId: "wnrpfl2o",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [mission, vision, about, services, team, projects, homepage],
  },
});
