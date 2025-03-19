
// This should be loaded in About,
// Havent changed too much here, prob needs some changes
// I remember greg wanted to support about Jodi in the future, so making a
// Photgrapher shcema like this works out

export default {
  name: 'photographer',
  type: 'document',
  title: 'Photographer',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
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
    {
      name: 'imagesMain',
      title: 'Main Images',
      type: 'array',
      description: 'Shown at the top in About Me',
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

    {
      name: 'images',
      title: 'Carousel Images',
      type: 'array',
      description: 'Shown in the Carousel in About Me',
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
    {
      name: 'summary',
      title: 'Summary',
      description: 'Brief Summary in Home',
      type: 'array',
      of: [
        { type: 'block' },
      ]
    },
    {
      name: 'about',
      title: 'About',
      description: 'Long text shown in About',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [
            { type: 'block' },
          ]
        }
      ]
      
    },
    {
      name: 'about2',
      title: 'About Second Section (Halton is Home)',
      description: 'Second Section in About me (Halton is Home)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'caption', title: 'Caption', type: 'string', description: 'Optional' },
        { name: 'description', title: 'Description', type: 'array',
          of: [
            { type: 'block' },
          ]
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          description: 'Shown in Second Section (Halton is Home: I’m Connected to my Community)',
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
      ]
      
    },
    {
      name: 'awards',
      type: 'array',
      title: 'Awards',
      of: [{ type: 'reference', to: [{ type: 'award' }] }],
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'location', title: 'Location', type: 'array',
          of: [
            { type: 'block' }
          ]
        },
        { name: 'socials', title: 'Socials', type: 'array',
          of: [
            { name: 'site', title: 'Site', type: 'object', 
              fields: [
                {name: 'name', title: 'name', type: 'string'},
                {name: 'url', title: 'URL', type: 'string'},
              ] 
            },
          ]
        }
      ],
    },
    {
      name: 'about3',
      title: 'About 3rd Section (Fun Facts)',
      description: 'Fun Facts in About Me',
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
          description: 'Shown in Fun Facts in About Me',
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
      ]
      
    },
 

    

    {
      name: 'about4',
      title: 'About Footer Section (Travel & Nature)',
      description: '(Travel & Nature)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          description: 'Shown in About Footer Section',
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
      ]
      
    },

  ],
  preview: {
    select: {
      title: 'name',
      media: "imagesMain",
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title,
        media: media ? media[0] : undefined
      }
    }
  },
};
