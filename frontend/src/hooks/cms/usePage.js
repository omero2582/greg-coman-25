import { client } from "@/sanity-cms/sanityClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// import axios from "axios";

 export const usePage = (page, projection, options = {}) => {
   
  const query = `*[_type == "${page}"][0]${projection||''}`;
  const fetchFn = async () => {  
    const data = await client.fetch(query);
    return data;
  }

  return useQuery({
    queryKey: ["page", page],
    queryFn: fetchFn,
    // staleTime: 1000 * 20,
    ...options,
  })
}

export const usePageHome = (options = {}) => usePage('homePage', `{
    ...,
    servicesSection[]{
      ...,
      services[]->
    }
  }`, options);

  export const usePageTestimonials = (options = {}) => usePage('testimonialsPage', `{
    ...,
    testimonials[]->
  }`, options);

  export const usePageServices = (options = {}) => usePage('servicesPage', `{
    ...,
    services[]->
  }`, options);