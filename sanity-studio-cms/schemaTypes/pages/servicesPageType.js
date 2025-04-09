export default {
  name: 'servicesPage',
  type: 'document',
  title: 'Services Page',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services',
      description: 'Services displayed. The first 4 will be on the main display with picture, the next 3 will be displayed as text at the bottom',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }]
    },
  ]
}