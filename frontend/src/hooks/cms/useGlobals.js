import { client } from "@/sanity-cms/sanityClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
// import axios from "axios";

 export const useGlobal = (options = {}) => {
   
  const query = `*[_type == "global"][0]`;
  const fetchFn = async () => {  
    const data = await client.fetch(query);
    return data;
  }

  return useQuery({
    queryKey: ["global"],
    queryFn: fetchFn,
    // staleTime: 1000 * 20, 
    ...options,
  })
}

// TODO add rest of pages