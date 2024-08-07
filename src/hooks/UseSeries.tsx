import { useQuery } from "@tanstack/react-query"
import Series from "../components/Series"
import { apiData } from "../service/apiData"


export function UseSeries () {
  const query = useQuery(
    {
      queryKey: ['series'],
      queryFn: () => apiData()
    }
  )

  if(query.isLoading) return <h1>Loading...</h1>
  if(query.isError) return <h1>Error</h1>

  return <Series query={query} />
}