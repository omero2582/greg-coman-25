export * from './useServices'
export * from './usePhotographer'

// staleTime = ms until data is considered stale & remounting component will refetch
// We set a global staleTime in /context/MyQueryProvider.jsx, but it can be overridden
// inside each useQuery or useMutation call, for example in useServiceQuery() inside useServices.js 