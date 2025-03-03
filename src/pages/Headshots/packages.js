const gregLocation = {
  label: '10737 Sixth Line, Georgetown, ON, Canada',
  link: 'https://maps.app.goo.gl/dbVNHZz6xw2zGgtj7',
}

// Below, we separate description, and features, so that we can control the spacing when
// we add a title 'Features' right before the feautres list
export const packages = [
  {
    name: 'Business',
    caption: 'Make a Positive First Impression',
    price:'$200',
    duration: '1hr',
    location: gregLocation, 
    
    
    description: `
A professional profile portrait for your business marketing and social media presence is a key element to the success of your business. A stunning headshot will make a difference and leave a positive first impression.
I'm sure you’ve seen many profile pictures of people that are unflattering  - whether too small, too dark, too cluttered, too blurry or simply out of date.
I will help capture your best side. I’ll make you feel comfortable,  and set aside your fears. It's really not that scary! Book your shoot now
You’re worth it!

Features:
- In Studio
- Your choice of backdrop (white, grey, black, blue, green)
- Open, airy, bright studio with a private entrance and ample parking
- An ideal location for casual or formal poses in a relaxed setting
- Select Poses
- A selection of Digital Proofs securely uploaded to you
- 3 edited high resolution digital images included with package (publishing quality)
- Additional edited high resolution digital images available for an upgrade fee
- Digital editing (colour correction, re-touching, cropping & resizing)
- Digital Files securely uploaded to you
- Customized Printing Services available for additional fee
- Optional On-Location service
`,

    features:`
- In Studio
- Your choice of backdrop (white, grey, black, blue, green)
- Open, airy, bright studio with a private entrance and ample parking
- An ideal location for casual or formal poses in a relaxed setting
- Select Poses
- A selection of Digital Proofs securely uploaded to you
- 3 edited high resolution digital images included with package (publishing quality)
- Additional edited high resolution digital images available for an upgrade fee
- Digital editing (colour correction, re-touching, cropping & resizing)
- Digital Files securely uploaded to you
- Customized Printing Services available for additional fee
- Optional On-Location service`
  },

  {
    name: 'Outdoor',
    caption: 'With nice scenery',
    location: '',
    description: gregLocation,
    features:''
  },

  {
    name: 'Environmental',
    caption: 'In your desired location',
    location: gregLocation,
    description: '', 
    features:''
  },
]