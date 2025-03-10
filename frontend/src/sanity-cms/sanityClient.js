import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "lcjb8vd6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  //TODO think turn ^^ this on, not sure if/how it will delay updates to our content though
  // but its generally very very good to turn on
});

export const builder = imageUrlBuilder(client);