import {} from '@sanity/icons'

// Covers Each Service info, add fields if missing info
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      title: 'Visible',
      name: 'isVisible',
      description: 'Set to visible when you want this service to be accessible at its URL. To remove it from other pages, check those pages documents in Sanity on the left tab. For example "Global" contains Navbar + Footer. Services Page and Home Page also contain some. You would have to go into those documents and remove those service references too',
      type: 'boolean'
    },
    { name: 'name', title: 'Name', type: 'string', },
    {
      name: 'slug',
      type: 'slug',
      description: 'URL string to access this page. For example if "abc", then it will be acccessible at "/services/abc"',
      options: {source: 'name'},
      validation: (rule) => rule
        .required()
        .error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.name,
    },

    { name: 'caption', title: 'Caption', type: 'string', description: "Shown in this Service's specific Page, under its name"},
    { name: 'captionOverview', title: 'Caption in /Services', type: 'string', description: "Shown in /services, as the description when you click into a service" },
    
    { 
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Preview Image shown in /services',
      options: { hotspot: true },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption for the image',
        }
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        { type: 'block' },
        // {
        //   type: 'image',
        //   name: 'descriptionImage',
        //   title: 'Description Image',
        //   options: { hotspot: true },
        // },
        // embedding img like above is bad editing experience + bad dev experience
      ],
    },
    { 
      name: 'descriptionImage',
      title: 'Description Image',
      type: 'image',
      description: 'Image shown alongside description text',
      options: { hotspot: true },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption for the image',
        }
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the image',
            }
          ],
        },
      ],
    },

    { name: 'packages', title: 'Packages', type: 'array', of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'caption', title: 'Caption', type: 'string' },
          { name: 'price', title: 'Price', type: 'string' },
          { name: 'duration', title: 'Duration', type: 'string' },
          { name: 'location', title: 'Location', type: 'array',
            of: [
              { type: 'block' }
            ]
          },
          { 
            name: 'description',
            title: 'Descrption',
            type: 'array',
            of: [
              { type: 'block' }] 
          },
          { 
            name: 'featuresTitle',
            title: 'Features Title',
            description: 'Title ONLY. For the features list, use the field below called "Features"',
            type: 'array',
            of: [
              { type: 'block' }] 
          },
          { 
            name: 'features',
            title: 'Features',
            description: 'List of Features',
            type: 'array',
            of: [
              { type: 'block' }] 
          },
              ]
      }
    ]}


    // Below is referency type for a schemaType package. Bad idea, explained in packageType.js
    // {
    //   name: 'packages',
    //   title: 'Packages',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'package' }] }]
    // }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: "caption",
      media: "mainImage",
    },
  },
};
