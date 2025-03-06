import { client } from "@/sanity-cms/sanityClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// import axios from "axios";


// staleTime = ms until data is considered stale & remounting component will refetch
 export const useServiceQuery = (service) => {
   
   const query = `*[_type == "service" && slug.current == "${service}"]`;
   console.log(query);
  const fetchService = async () => {  
    const data = await client.fetch(query);
    console.log('service=', data)
    return data;
  }

  return useQuery({
    queryKey: ["service", service],
    queryFn: fetchService,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 20, 
    retry: false,
  })
}

// Think below works, not sure
export const useServicesAllQuery = () => {
  const queryClient = useQueryClient();
  
  const fetchMySearches = async () => {
    const query = `*[_type == "service"]`;
    const data = await client.fetch(query);


    if(data){
      data.forEach((service) => {
        queryClient.setQueryData(['service', service?.slug?.current || service?._id], service);
      });
    }

    return data
  }
  
  return useQuery({
    queryFn: fetchMySearches,
    queryKey: ["services"],
    refetchOnWindowFocus: false,
    staleTime: 1000 * 20,
    retry: false,
  })

}
