import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Headshots() {
  return (
      <div className='max-w-[1440px] mx-auto w-full grid bg-[#FFFCF9] justify-center'>
        {/**leading-[72px] */}
        <div className='bg-sky-200 mx-auto'>
          <h1 className='text-[46px]'>HEADSHOTS</h1>
          <p>Professional portrait focused on you</p>
        </div>
        <Carousel/>
        <About/>
        <Packages/>
      </div>
  )
}

function Carousel(){
  return (
    <div>Carousel</div>
  )
}

function About(){
  return (
    <div>
      Why you want a headshot by Greg
    </div>
  )
}



import { packages } from './packages';

function Packages(){
  const [selectedTab, setSelectedTab] = useState('Business');
  // const gregLocation = '10737 Sixth Line, Georgetown, ON, Canada'

  const selectedPackage = packages.find(p => p.name === selectedTab)

  return (
    <div>
      <div>{packages.map(p => (
        <button 
          key={p.name}
          onClick={() => setSelectedTab(p.name)}
          className='px-2 py-1 bg-sky-200 hover:bg-sky-300'
        >
          {p.name}
        </button>
      ))}

      </div>
        <div>
          <div className='leading-[1.3]'>
            <h2 className='font-bold text-[1.35rem]'>
              {selectedPackage.name}
            </h2>
            <h3>{selectedPackage.caption}</h3>
            <p>
              {`${selectedPackage.price} | ${selectedPackage.duration} | `}
              {/* <a href={`http://maps.google.com/?q=${selectedPackage.location.label}`}> */}
              <a target='_blank' href={selectedPackage.location.link}>
                {selectedPackage.location.label}
              </a>
            </p>
          </div>
          <div className='max-w-[500px]'>
            <ReactMarkdown
              // allowedElements={['p', 'ul', 'li', 'br']}
              // unwrapDisallowed={true} // Prevents rendering disallowed elements as text
              breaks
              components={{
                p: ({ children }) => <p className="">{children}</p>,
                ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                li: ({ children }) => <li className="ml-4">{children}</li>,
                br: () => <br className="block my-2" />, // Add spacing for line breaks
              }}
            >
              {selectedPackage.description}
            </ReactMarkdown>
            <div>
              <h3 className='font-bold'>Features:</h3>
              <ReactMarkdown
                // allowedElements={['p', 'ul', 'li', 'br']}
                // unwrapDisallowed={true} // Prevents rendering disallowed elements as text
                breaks
                components={{
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                  li: ({ children }) => <li className="ml-4">{children}</li>,
                  br: () => <br className="block my-2" />, // Add spacing for line breaks
                }}
              >
                {selectedPackage.features}
              </ReactMarkdown>
            </div>
          </div>
        </div>
    </div>
  )
}