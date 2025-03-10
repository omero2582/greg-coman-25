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
      name: 'bookingSection',
      title: 'Booking Section',
      type: 'array', 
      of: [
        {
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
      }] 
    },

    // TODO I think inside this section, replace the array of images,
    // with an array of references to an awardsType Schema 
    // This this can reference and ALSO each Photographer Document in their
    // photograherSchema can reference it
    // Also then each award can have a title name and desc for future proof
    {
      name: 'awardsSection', title: 'Awards Section', type: 'array', 
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
                  fields: [
                    {
                      name: 'caption',
                      title: 'Caption',
                      type: 'string',
                      description: 'Optional caption for the image',
                      options: { hotspot: true },
                    }
                  ],
                },
              ],
            },
          ],
        }
      ]
    },
  ]
}