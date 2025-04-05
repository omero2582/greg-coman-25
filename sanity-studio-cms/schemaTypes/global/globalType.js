export default {
  name: 'global',
  type: 'document',
  title: 'Global',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'socials',
      title: 'Social Links',
      description:'Social Links for the website. Keep in mind, each Photographer also has their own social links. Icons currently support the names (case insensitive): Instagram, Facebook, LinkedIn, Twitter/X, Email. If you input a text value different to these for "label", it will still work, but the icon will be default icon',
      type: 'object', 
      fields: [
        {name: 'links', title: 'Links', type: 'array', 
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string', validation: rule => rule.required() },
                { name: 'url', title: 'URL', type: 'string', validation: rule => rule.required(), },
              ]
            }
          ]
        },
      ] 
    },
    {
      name: 'navbar',
      title: 'Top Navigation Bar',
      type: 'object', 
      fields: [
        {name: 'links', title: 'Links', type: 'array', 
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string', validation: rule => rule.required(), },
                { name: 'path', title: 'Path', type: 'string', validation: rule => rule.required(), description: 'URL after the first slash. For example, if your domain is gregcoman.com, and you want to go to gregcoman.com/about, then the path would be /about' },
              ]
            }
          ]
        },
        {name: 'buttonText', title:'Button Text', type: 'string'},

      ] 
    },
    {
      name: 'footer',
      title: 'Footer',
      description: 'goes at the very bottom of every page',
      type: 'object', 
      fields: [
        {
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [{ type: 'image' }],
          options: { hotspot: true },
        },
        {
          name: 'linkColumns',
          title: 'Link Columns',
          type: 'array', 
          of: [
            {
              type: 'object',  
              fields: [
                {name: 'name', title:'Column Name', type: 'string'},
                {name: 'links', title: 'links', type: 'array', 
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'label', title: 'Label', type: 'string', validation: rule => rule.required(), },
                        { name: 'path', title: 'Path', type: 'string', validation: rule => rule.required(), description: 'URL after the first slash. For example, if your domain is gregcoman.com, and you want to go to gregcoman.com/about, then the path would be /about' },
                      ]
                    }
                  ]
                },
              ],
          }] 
        },
        {name: 'contactInfo', title: 'Contact Info', type: 'array', 
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string', validation: rule => rule.required(), },
                { name: 'description', title: 'Description', type: 'array',
                  of: [
                    { type: 'block' },
                  ] 
                },
              ]
            }
          ]
        },
        {
          name: 'disclaimer',
          title: 'Disclaimer',
          type: 'object',
          fields: [
            { name: 'description', title: 'Description', type: 'array',
              of: [
                { type: 'block' },
              ] 
            },
          ]
        }
      ] 
    },

    {
      name: 'bookingSection',
      title: 'Booking Section',
      type: 'array', 
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'subtitle', title: 'Subtitle', type: 'string'},
            {name: 'buttonText', title:'Button Text', type: 'string'},
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
              options: { hotspot: true },
            },
          ]
        }
      ]
    },
    
    {
      name: 'stepsSection',
      title: 'Steps Section',
      type: 'array', 
      of: [
        {
          type: 'object',  
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'subtitle', title: 'Subtitle', type: 'string'},
            {name: 'steps', title: 'steps', type: 'array', 
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
                  ]
                }
              ]
            },
            {name: 'buttonText', title:'Button Text', type: 'string'},
          ],
      }] 
    },

    {
      name: 'awardsSection',
      title: 'Awards Section',
      type: 'array', 
      of: [
        {
          type: 'object',  
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'awards', title: 'awards', type: 'array', 
              of: [{ type: 'reference', to: [{ type: 'award' }] }]
            },
          ],
      }] 
    },
  ]
}