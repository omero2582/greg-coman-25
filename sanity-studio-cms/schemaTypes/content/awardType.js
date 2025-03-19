import {} from '@sanity/icons'

export default {
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', description: "Award Name" },
    { name: 'awardDate', title: 'Award Date', type: 'date' },
    { name: 'placement', title: 'Placement', type: 'string' },
    { name: 'presenter', title: 'Presenter', type: 'string' },
    { 
      name: 'description',
      title: 'Descrption',
      type: 'array',
      of: [
        { type: 'block' }] 
    },
    {
      name: 'images',
      title: 'Images',
      description: "Reward Image. Currently, only the first one is used in the code",
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
      subtitle: "presenter",
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
