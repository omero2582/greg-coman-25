import { client } from "@/sanity-cms/sanityClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// import axios from "axios";

 export const usePhotographerQuery = (photographer, options = {}) => {
   
  const query = `*[_type == "photographer" && slug.current == "${photographer}"][0]`;
  const fetchService = async () => {  
    const data = await client.fetch(query);
    return data;
  }

  return useQuery({
    queryKey: ["photographer", photographer],
    queryFn: fetchService,
    // staleTime: 1000 * 20,
    ...options,
  })
}

export const usePhotographerFirstQuery = (options = {}) => {
   
  const query = `*[_type == "photographer"][0]{
    ...,
    awards[]->
  }`;
  const fetchService = async () => {  
    const data = await client.fetch(query);
    return data;
  }

  return useQuery({
    queryKey: ["photographer", "greg-coman"],
    queryFn: fetchService,
    // staleTime: 1000 * 20,
    ...options,
  })
}

// export const useServicesAllQuery = () => {
//   const queryClient = useQueryClient();
  
//   const fetchMySearches = async () => {
//     const query = `*[_type == "service"]`;
//     const data = await client.fetch(query);


//     if(data){
//       data.forEach((service) => {
//         queryClient.setQueryData(['service', service?.slug?.current], service);
//       });
//     }

//     return data
//   }
  
//   return useQuery({
//     queryFn: fetchMySearches,
//     queryKey: ["services"],
//     refetchOnWindowFocus: false,
//     // staleTime: 1000 * 20,
//     retry: false,
//   })

// }
