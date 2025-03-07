
// Should cover Home & some reusable components like 'booking' and 'steps',
// which are used in multiple pages.
// Add fields if missing

export default {
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // {
    //   name: 'heroText',
    //   title: 'Hero Text',
    //   type: 'string',
    //   description: 'Text at the top of Home'
    // },
    {name: 'heroContents', title: 'Hero Contents', type: 'array', 
      description: 'Images + Texts used at the top of some pages',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            { name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: "title",
            },
          },
        }
      ]
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        { type: 'block' },
      ]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'booking',
      title: 'Booking',
      type: 'object', 
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {name: 'buttonName', title:'Button Name', type: 'string'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image' }],
          options: { hotspot: true },
        },
      ]
    },
    
    {
      name: 'steps',
      title: 'Steps',
      type: 'object', 
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {name: 'steps', title: 'steps', type: 'array', 
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'description', title: 'Description', type: 'array',
                  of: [
                    { type: 'block' },
                  ] 
                },
              ]
            }
          ]
        },
      ], 
    },
    {
      name: 'packages',
      title: 'Packages',
      type: 'object', 
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'description', title: 'Description', type: 'array',
          of: [
            { type: 'block' },
        ]},
        {name: 'buttonName', title:'Button Name', type: 'string'},
        {name: 'name2', title: 'Name 2', type: 'string'},
        {name: 'description2', title: 'Description 2', type: 'array',
          of: [
            { type: 'block' },
        ]},
        
      ]
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
