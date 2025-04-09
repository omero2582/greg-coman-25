import React from "react";
import BookingProcess from "../../components/oldBeforeAddingHomeToCMS/BookingProcess";
import Steps from "@/components/Steps";
import Awards from "@/components/Awards";
import NavBarSizeAccountFor from "@/components/NavBarSizeAccountFor";
import { usePageTestimonials } from "@/hooks/cms/usePage";
import { Spinner } from "@/components/ui/Spinner";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity-cms/sanityClient";


const Testimonials = () => {
  const { data, error, isPending, isFetching } = usePageTestimonials();

  if(isPending){
    return <div className="min-h-[100vh] flex justify-center">
        <Spinner size="xl" className="text-neutral-400">
          <span className="text-[1.2rem] pt-[4px]">Loading...</span>
        </Spinner>
      </div>
  }

  if(error || !data){
    return <div className="min-h-[60vh] grid place-content-center">
      <span className="text-[1.6rem] pt-[4px]">
        Testimonials Not Found
      </span>
  </div>
  }

  const { title, description, testimonials } = data; 

  return (
    <>
    <NavBarSizeAccountFor/>
    <div className="min-h-screen bg-gray-50 pt-12">
      <div className="max-w-6xl mx-auto text-center">
        {title &&
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {title}
        </h1>}
        {description && 
        <div className='mx-auto !space-y-2 prose prose-lg prose-color-(--color-gray-600) leading-[1.55]'>
          <PortableText value={description} />
        </div>}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-8">
        {testimonials &&
        testimonials.map(({name, images, rating, descriptionShort}, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {images?.[0] &&
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
              <img
                src={urlFor(images[0])?.url()}
                alt={name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>}
            {name &&
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {name}
            </h2>}
            {descriptionShort && 
            <div className='mt-2 !space-y-2 prose prose-color-(--color-gray-600) leading-normal'>
              <PortableText value={descriptionShort} />
            </div>}
            {rating &&
            <div className="mt-3 text-yellow-500 text-lg">
              {new Array(rating).fill(1).slice(0, 5)
                .map((r, i) => <span key={i}>⭐</span>)}
              {/*TODO Change this to react stars in the fture */}
            </div>}
          </div>
        ))}
      </div>
      <Awards/>
      <Steps />
    </div>
    
    </>
  );
};

export default Testimonials;
