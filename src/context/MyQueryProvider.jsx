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
        staleTime: 0,
        retry: false,
        // gcTime: 1000 * 60 * 60 * 24, 
        // This is garbage collection time. staleTime is prob what youre looking for instead
      },
      mutations: {
        retry: false,
        staleTime: 0,
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