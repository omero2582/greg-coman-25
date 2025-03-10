
// Feel like we dont need this, dont know
// Logo is inside globalType.js Schema

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
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
