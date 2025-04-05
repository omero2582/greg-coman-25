import { client } from "@/sanity-cms/sanityClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// import axios from "axios";

 export const useServiceQuery = (service) => {
   
  const query = `*[_type == "service" && slug.current == "${service}" && isVisible == true][0]`;
  const fetchService = async () => {  
    const data = await client.fetch(query);
    return data;
  }

  return useQuery({
    queryKey: ["service", service],
    queryFn: fetchService,
    refetchOnWindowFocus: false,
    // staleTime: 1000 * 20, 
    retry: false,
  })
}


export const useServicesAllQuery = () => {
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
    refetchOnWindowFocus: false,
    // staleTime: 1000 * 20,
    retry: false,
  })

}
