import {} from '@sanity/icons'

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', description: "Client's Name" },
    { name: 'rating', title: 'Rating', type: 'number',
        validation: rule => rule.required().min(0).max(5)
     },
    { name: 'reviewDate', title: 'Review Date', type: 'date' },
    { name: 'reviewUrl', title: 'Review URL', type: 'string', description: "Link to Review" },
    { 
      name: 'descriptionShort',
      title: 'Short Descrption',
      description: 'Shown as the visible text on Testimonials page',
      type: 'array',
      of: [
        { type: 'block' }] 
    },
    { 
      name: 'description',
      title: 'Full Descrption',
      description: 'Not shown currently in Testimonials page. Above field "Short Description" is what is currently shown in Testimonials page',
      type: 'array',
      of: [
        { type: 'block' }] 
    },
    {
      name: 'images',
      title: 'Images',
      description: "Client's Image. Currently, only the first one is used in the code",
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
    // I think just use images array above, so its future proof
    // { 
    //   name: 'mainImage',
    //   title: 'Main Image',
    //   type: 'image',
    //   description: 'Main Image Shown',
    //   options: { hotspot: true },
    //   fields: [
    //     {
    //       name: 'caption',
    //       title: 'Caption',
    //       type: 'string',
    //       description: 'Optional caption for the image',
    //     }
    //   ],
    // },
    
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: "rating",
      media: "images",
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title,
        subtitle,
        media: media ? media[0] : undefined
      }
    }
  },
};
