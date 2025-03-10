import {} from '@sanity/icons'

// Covers Each Service info, add fields if missing info
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', },
    {
      name: 'slug',
      type: 'slug',
      description: 'URL string',
      options: {source: 'name'},
      validation: (rule) => rule
        .required()
        .error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.name,
    },
    { name: 'caption', title: 'Caption', type: 'string', },
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
          { name: 'caption', title: 'caption', type: 'string' },
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
