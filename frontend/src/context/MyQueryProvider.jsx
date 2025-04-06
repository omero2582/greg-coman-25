import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";


export const MyQueryProvider = ({children}) => {

  // 1. the query client
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
      },
      onSuccess: (data) => {
      }
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
      },
      onSuccess: (data) => {
      }
    }),
    
    defaultOptions: {
      queries: {
        staleTime: 1000 * 20, // staleTime = ms until data is considered stale & remounting component will refetch
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        // gcTime: 1000 * 60 * 60 * 24, 
        // 24 hours. This is garbage collection time. staleTime is prob what youre looking for instead
      },
      mutations: {
        retry: false
      }
    }
  })


  // 2. the persister
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  return (
    <PersistQueryClientProvider 
      client={queryClient}
      persistOptions={{
        persister,
        maxAge: 5 * 60 * 1000,  // needs to be equal or higher than staleTime, for staleTime to work.
        // Otherwise this will discard the data before staletime  
        // maxAge will make sure to discard data BEFORE displaying the cache
        // if maxAge is not set like this, then even if it is stale, there will be 1 render that will display the prev data before it refetches 
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            // this funcion returns a boolean, which determines whether the query should be persisted into localStorage
            // default for this function is for all queries: return query.state.status === 'success'
             return query.state.status === 'success'
          }
        } 
      } }
    >
      {children}
      <ReactQueryDevtools />
    </PersistQueryClientProvider>

  )
}