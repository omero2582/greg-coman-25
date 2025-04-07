import { Instagram, Linkedin, Facebook, Mail, Twitter } from "lucide-react";
import { FaLink } from "react-icons/fa6";

export function SocialIcon({name, ...props}){
  const iconComponents = {
    instagram: Instagram,
    linkedin: Linkedin,
    facebook: Facebook,
    twitter: Twitter,
    x: Twitter,
    email: Mail,
    default: FaLink,
  }

  const getIconComponent = (name) => {
    return iconComponents[name.toLowerCase()] || iconComponents.default;
  }

  const Component = getIconComponent(name);



  return <Component {...props}/>;
};