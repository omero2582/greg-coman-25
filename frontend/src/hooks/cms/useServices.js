import { client } from "@/sanity-cms/sanityClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// import axios from "axios";

 export const useServiceQuery = (service, options = {}) => {
   
  const query = `*[_type == "service" && slug.current == "${service}" && isVisible == true][0]`;
  const fetchService = async () => {  
    const data = await client.fetch(query);
    return data;
  }

  return useQuery({
    queryKey: ["service", service],
    queryFn: fetchService,
    // staleTime: 1000 * 20,
    ...options,
  })
}


export const useServicesAllQuery = (options = {}) => {
  const queryClient = useQueryClient();
  
  const fetchMySearches = async () => {
    const query = `*[_type == "service && isVisible == true"]`;
    const data = await client.fetch(query);


    if(data){
      data.forEach((service) => {
        queryClient.setQueryData(['service', service?.slug?.current], service);
      });
    }

    return data
  }
  
  return useQuery({
    queryFn: fetchMySearches,
    queryKey: ["services"],
    // staleTime: 1000 * 20,
    ...options,
  })

}
