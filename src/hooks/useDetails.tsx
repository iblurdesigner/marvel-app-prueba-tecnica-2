import { useQuery } from "@tanstack/react-query"

import { apiDetails } from "../service/apiDetails"
import Details from "../pages/Detail/Details"
import { useParams } from "react-router-dom"


export function useDetails () {

  const params = useParams()

  const queryDetail = useQuery(
    {
      queryKey: ['detail'],
      queryFn: () => apiDetails(`${params.id}`)
    }
  )


  if(queryDetail.isLoading) return <h1>Loading...</h1>
  if(queryDetail.isError) return <h1>Error</h1>

  return <Details  />
}