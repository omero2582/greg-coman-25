export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'tabTitle',
      title: 'Tab Title',
      type: 'string',
    },
    {
      name: 'tabDescription',
      title: 'Tab Description',
      type: 'string',
    },
    {
      name: 'heroSection', title: 'Hero Section', type: 'array', 
      description: 'Frist section at the top',
      of: [
        {
          type: 'object',
          fields: [
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
        }
      ]
    },
    {
      name: 'introSection', title: 'Intro Section', type: 'array', 
      description: 'Second Section from the top',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            
          ],
        }
      ]
    },
    {
      name: 'aboutSection', title: 'About Section', type: 'array', 
      description: 'Third Section from the top',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            {
              name: 'imageStamp',
              title: 'imageStamp',
              type: 'image',
              description: 'The small circular stamp/award',
              options: { hotspot: true },
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
          ],
        }
      ]
    },
    {
      name: 'packagesSection',
      title: 'Packages Section',
      description: 'Fourth Section from the top',
      type: 'array', 
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
            ]},
            {name: 'buttonText', title:'Button Text', type: 'string'},
            {
              name: 'services',
              title: 'Services',
              description: 'Services displayed. The first 4 will be on the main display with picture, the rest will be displayed as text at the bottom',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'service' }] }]
            },
            {name: 'title2', title: 'Title 2', type: 'string'},
            {name: 'description2', title: 'Description 2', type: 'array',
              of: [
                { type: 'block' },
            ]},
            
          ]
        }
      ],
      
    },
    {
      name: 'images',
      title: 'Images Collage',
      description: 'Collage of Images shown towards the bottom',
      type: 'array',
      of: [{ 
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
       }],
    },
    {
      name: 'aboutSection2', title: 'About Section 2', type: 'array', 
      description: 'Section below collage, and above awards',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
              ] 
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
            { name: 'title2', title: 'Title 2', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            { name: 'description2', title: 'Description 2', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
          ],
        }
      ]
    },
    {
      name: 'testimonialSection', title: 'Testimonial Section', type: 'array', 
      description: 'Main testimonial. Section is towards the bottom',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'title', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            { name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
            {name: 'buttonText', title:'Button Text', type: 'string'},
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
          ],
        }
      ]
    },
  ],
};
