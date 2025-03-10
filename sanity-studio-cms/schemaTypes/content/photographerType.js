
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
      name: 'summary',
      title: 'Summary',
      description: 'Short text shown in Home',
      type: 'array',
      of: [
        { type: 'block' },
      ]
    },
    {
      name: 'about',
      title: 'About',
      description: 'Long text shown in About',
      type: 'array',
      of: [
        { type: 'block' },
      ]
    },
    // {
    //   name: 'awards',
    //   type: 'array',
    //   title: 'Awards',
    //   of: [{ type: 'reference', to: [{ type: 'award' }] }],
    // },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'location', title: 'Location', type: 'object', 
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'url', title: 'URL', type: 'string'},
          ] 
        },
      ],
    },
  ],
};
