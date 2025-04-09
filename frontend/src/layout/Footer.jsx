import LogoNav from "@/assets/Logo_nav.svg";
import PPOCImage from "../pages/Home/assets/ppoc.png";
import NPSImage from "../pages/Home/assets/NPSlogo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { useGlobal } from "@/hooks/cms/useGlobals";
import { Link } from "react-router";
import { urlFor } from "@/sanity-cms/sanityClient";
import { PortableText } from "@portabletext/react";
import { SocialIcon } from "@/components/SocialIcon";

export default function Footer() {
  const { data, error, isPending, isFetching } =  useGlobal();

  const { socials } = data || {}
  const footer = data?.footer;
  const { contactInfo, disclaimer, linkColumns, logos } = footer || {}
  const { logo } = data || {}

  return (
    <footer className="w-full bg-[#8DB5CE] text-(--color-brandBlue-800) py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {logo && 
          <img
            src={urlFor(data.logo)?.url()}
            alt="Greg Coman Photography Logo"
            className="h-16 mb-6 md:mb-0"
          />}

          {/* Certification Logos */}
          {logos && 
          <div className="flex space-x-4 mb-6 md:mb-0">
            {logos.map((l, i) => (
              <img
                src={urlFor(l)?.url()}
                className="h-12"
                key={i}
              />
            ))}
            {/* alt="Photography Certification"
            alt="NPS Nikon Professional Services" */}
          </div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {linkColumns &&
          linkColumns.map((col, i) => (
            <div key={i} className="flex flex-col space-y-2">
              {col?.links?.map((l, j) => (
                <Link 
                  to={l.path}
                  className={`${j > 0 && 'font-normal'} !text-(--color-brandBlue-800) hover:underline  w-fit cursor-pointer`}
                  key={j}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col space-y-2">
          {contactInfo &&
            contactInfo.map((c, i) => (
              <div key={i}>
                {c?.title &&
                <p className="font-medium">{c.title}</p>}
                {c?.description &&
                <div 
                  className='prose-a:font-normal prose-a:no-underline prose-a:hover:underline
                  max-w-3xl !space-y-2 prose prose-color-(--color-brandBlue-800) leading-normal'
                >
                  <PortableText value={c.description} />
                </div>}
              </div>
            ))}
             {/* Social Media Icons */}
             {socials?.links &&
              <div className="flex space-x-3 mt-2">
                {socials.links?.map(l => (
                <a 
                  className="border text-(---color-brandBlue-800) border-(--color-brandBlue-800) rounded-full p-1.5"
                  href={l.label?.toLowerCase() === 'email' ? `mailto:${l.url}` : l.url}
                  aria-label={l.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={l.label}
                >  
                  <SocialIcon name={l.label} size={16}/>
                </a>))}
              </div>
             }
          </div>      
        </div>
        <div className="border-t border-(--color-brandBlue-800)/30 mt-8 pt-4">
          {disclaimer?.description &&
          <div className='max-w-3xl prose-sm !space-y-2 prose prose-color-(--color-brandBlue-800) leading-normal'>
            <PortableText value={disclaimer.description} />
          </div>}
        </div>
      </div>
    </footer>
  );
}
