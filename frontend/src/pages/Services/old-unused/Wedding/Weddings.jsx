import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AspectRatio } from '@/components/ui/aspect-ratio'

/**
 * Example: Import wedding-specific images
 * (If you want to auto-import them as you did in Headshots, you can do so with import.meta.glob.
 * Or just import them individually, as below.)
 */
import weddingImg1 from './assets/weddings/wed1.jpg'
import weddingImg2 from './assets/weddings/wed2.jpg'
import weddingImg3 from './assets/weddings/wed3.jpg'
/** etc. */

const weddingImages = [weddingImg1, weddingImg2, weddingImg3]

export default function Weddings() {
  return (
    <div className='max-w-[1440px] mx-auto w-full grid bg-[#FFFCF9] justify-center'>
      {/* Page Title + Tagline */}
      <div className='mx-auto mt-4 mb-[12px] grid justify-items-center'>
        <h1 className='text-[52px] leading-[1] uppercase'>Weddings</h1>
        <p className='text-[1.15rem]'>Capture your special day</p>
      </div>

      {/* Carousel */}
      <MyCarousel />

      {/* About/Description */}
      <About />

      {/* Packages */}
      <WeddingPackages />
    </div>
  )
}

function MyCarousel() {
  return (
    <div>
      <Carousel
        className="relative mx-2"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000, // Adjust as you see fit
          }),
        ]}
      >
        <CarouselContent className='-ml-2'>
          {weddingImages.map((img, i) => (
            <CarouselItem key={i} className="pl-2 flex-none">
              <img
                src={img}
                alt={`wedding-carousel-${i}`}
                className="rounded-md h-[360px] w-auto object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </div>
  )
}

function About() {
  return (
    <div className='my-18 gap-x-14 grid grid-flow-col max-w-[880px] justify-self-center'>
      <div className='space-y-2 self-center text-[1.25rem] leading-[1.55]'>
        <p>
          Your wedding day is one of the most important moments of your life. 
          Our wedding photography packages aim to capture every precious memory 
          so you can relive those moments for years to come.
        </p>
        <p>
          We understand how unique each wedding is, and we work closely with you 
          to ensure our photos reflect your style and personality. Whether it’s an 
          intimate backyard wedding or an elegant ballroom affair, we’ll tailor everything 
          to meet your needs. 
        </p>
        <p>
          Let us help tell your story in a way that you’ll cherish forever.
        </p>
      </div>
      {/* Add an image or remove this element if you don't want a side image */}
      <div className='justify-self-end'>
        <img
          src={weddingImg2}
          alt="Wedding couple"
          className='h-[360px] rounded-md object-cover'
        />
      </div>
    </div>
  )
}

/**
 * Example wedding packages data
 * You can of course put this in a separate file if you prefer (similar to `packages.js`).
 */
const weddingPackages = [
  {
    name: 'Standard',
    caption: 'Perfect for smaller weddings',
    price:'$1200',
    duration: '4hr coverage',
    location: {
      label: 'Your venue',
      link: 'https://maps.google.com', // Insert your real link
    },
    description: `
This package is great for couples on a budget or intimate weddings with fewer guests. 
Enjoy coverage of the ceremony, essential family and group shots, and a portrait session for the bride and groom.
`,
    features: `
- 4 hours of coverage
- Professional editing
- Online gallery with high-resolution images
- 1 photographer
`,
  },
  {
    name: 'Premium',
    caption: 'Comprehensive all-day coverage',
    price:'$2500',
    duration: '8hr coverage',
    location: {
      label: 'Your venue',
      link: 'https://maps.google.com',
    },
    description: `
Our most popular wedding package. You’ll have full coverage of the bride and groom’s prep, 
ceremony, reception, and everything in-between. We’ll capture every precious moment.
`,
    features: `
- 8 hours of coverage
- 2 photographers
- Professional editing
- Online gallery with high-resolution images
- Additional on-site portrait session
- Personalized wedding album
`,
  },
  {
    name: 'VIP',
    caption: 'For couples who want it all',
    price:'$4000',
    duration: '12hr coverage',
    location: {
      label: 'Your venue',
      link: 'https://maps.google.com',
    },
    description: `
The VIP experience includes full-day coverage from start to finish, 
a pre-wedding engagement session, a luxurious wedding album, and more. 
No moment goes uncaptured.
`,
    features: `
- Full-day coverage (up to 12 hours)
- 2 photographers + 1 assistant
- Pre-wedding engagement session
- Heirloom-quality wedding album
- Professional editing
- Online gallery with high-resolution images
- Priority turnaround time
`,
  },
]

function WeddingPackages(){
  const [selectedTab, setSelectedTab] = useState(weddingPackages[0].name);
  const activePackage = weddingPackages.find(p => p.name === selectedTab);

  return (
    <div className='max-w-[880px] w-full justify-self-center'>
      {/* Tabs */}
      <div className='mb-2'>
        {weddingPackages.map(p => (
          <button
            key={p.name}
            onClick={() => setSelectedTab(p.name)}
            className={
              'text-[1.2rem] px-4 py-1 bg-sky-200 hover:bg-sky-300 ' +
              (p.name === selectedTab ? 'font-bold' : '')
            }
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Package Content */}
      <div className='text-[1.15rem] '>
        <div className='my-[10px] leading-[1.4]'>
          <h2 className='font-bold text-[1.35rem]'>
            {activePackage.name}
          </h2>
          <h3 className='text-[1.03rem]'>{activePackage.caption}</h3>
          <p className='text-[1.1rem]'>
            {`${activePackage.price} | ${activePackage.duration} | `}
            <a target='_blank' rel='noreferrer' href={activePackage.location.link}>
              {activePackage.location.label}
            </a>
          </p>
        </div>

        <div className='mb-2'>
          <ReactMarkdown>{activePackage.description}</ReactMarkdown>
        </div>
        <h3 className='font-bold'>Features:</h3>
        <ReactMarkdown>{activePackage.features}</ReactMarkdown>
      </div>
    </div>
  )
}
