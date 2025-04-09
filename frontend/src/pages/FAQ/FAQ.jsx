import NavBarSizeAccountFor from '@/components/NavBarSizeAccountFor'
import React from 'react'

export default function FAQ() {
  return (
    <>
      <NavBarSizeAccountFor/>
      <div className='mt-5'></div>
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-8">
          We’ve compiled answers to some of our most common questions.
          If you need more info or have other questions, feel free to contact us!
        </p>

        <div className="space-y-6">
          {/* FAQ Item */}
          <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg">
              Question 1: What should we wear to our session?
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              This can vary greatly and depend on your photographer’s style, your style,
              the location, the ages of the people, etc. Rule of thumb tends to be:
              choose clothing that does not detract from faces, or overpower the image.
              Selecting 2 or 3 colours that blend well together for each person to wear
              is often recommended. Ask your professional photographer for a consultation
              based on your situation.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg">
              Question 2: Can I share the photos on Social Media?
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Yes, you are welcome to share the photos on your personal social media
              accounts. Please credit Greg Coman as the photographer. However, altering
              or selling the images without permission is not allowed.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg">
              Question 3: How long will you keep the photos?
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              We typically retain digital copies of client photos for a reasonable
              period (1 year) to ensure we can fulfill any future requests or provide
              replacements if needed. We do not provide extended archival services past
              one year, but we can recommend third-party archival services. We recommend
              backing up your digital copies of the photos in multiple locations to prevent
              loss. However, if you lose your copies, please contact us, and we will do our
              best to provide replacements, subject to availability and any applicable fees.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg">
              Question 4: Will you use my photos for promotional purposes?
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Unless otherwise specified in writing, I may use select images from
              our session for promotional purposes, including my website, social media,
              and marketing materials. I respect your privacy and will typically request
              your consent first.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg">
              Question 5: What is the benefit of investing in a professional photographer?
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              You typically get what you pay for. You will receive premium service, quality
              photo products, and the photographers’ range of experience and skills.
              True professionals keep up with their skills and education, invest thousands
              of dollars into the best professional photographic lighting and camera
              equipment, as well as fast computers.
            </p>
          </div>

          {/* FAQ Item */}
          <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg">
              Question 6: Why do I need professional headshots instead of doing one myself with my phone?
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Professional photographers who specialize in headshots know how to light,
              pose, style and bring out the best in you, in a way you never could with
              your phone at the end of your arm. You and your online persona deserve
              the best image of yourself!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
