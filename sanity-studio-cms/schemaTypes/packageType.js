// This is a bad idea, because then you end up making 20 total packages, each 
// for different services, and the CMS editing experience for this is really bad
// Imagine a list of 20 packages like 'Business Portrait', 'Environmental Portrait', etc
// It would be really hard for the editor to edit the packages of a speciifc service / find the exact package they need

// export default {
//   name: 'package',
//   title: 'Package',
//   type: 'document',
//   fields: [
//     { name: 'title', title: 'Title', type: 'string' },
//     { name: 'shortName', title: 'shortName', type: 'string' },
//     { name: 'caption', title: 'caption', type: 'string' },
//     { name: 'price', title: 'Price', type: 'number' },
//     { name: 'duration', title: 'Duration', type: 'number' },
//     { name: 'location', title: 'Location', type: 'string' },
//     { 
//       name: 'description',
//       title: 'Descrption',
//       type: 'array',
//       of: [
//         { type: 'block' }] 
//     },
//   ]
// };
