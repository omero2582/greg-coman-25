export default {
  name: 'testimonialsPage',
  type: 'document',
  title: 'Testimonials Page',
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      description: 'Testimonials Displayed',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }]
    },
  ]
}