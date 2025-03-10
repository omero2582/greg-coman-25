import companyType from "./content/companyType";
import photographerType from "./content/photographerType";
import serviceType from "./content/serviceType";
import globalType from "./global/globalType";
import aboutPageType from "./pages/aboutPageType";
import blogsPageType from "./pages/blogsPageType";
import contactPageType from "./pages/contactPageType";
import homePageType from "./pages/homePageType";
import pricingPageType from "./pages/pricingPageType";
import servicesPageType from "./pages/servicesPageType";
import testimonialsPageType from "./pages/testimonialsPageType";

// In the future, for the sanity UI, you can use 'sanity/structure' to
// create a folder to visually encapsulate each of 'Global' 'Content' and 'Pages'.
// For now they are all listed in the same list though 
// https://www.sanity.io/docs/set-up-structure-builder-to-override-the-default-list-view

export const schemaTypes = [
  // Global
  globalType,

  // Content
  serviceType,
  photographerType,
  // companyType, //<== I think we dont need this one

  // Pages
  // Done Pages
  homePageType, // this was huge page 💀

  // Not Done Pages
  aboutPageType,
  contactPageType,
  servicesPageType,
  pricingPageType,
  testimonialsPageType,

  blogsPageType,

]
