import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lcjb8vd6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});