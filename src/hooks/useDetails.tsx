import { useQuery } from "@tanstack/react-query"

import { apiDetails } from "../service/apiDetails"
import { useParams } from "react-router-dom"


export function useDetails () {

  const params = useParams()

  const queryDetail = useQuery(
    {
      queryKey: ['detail'],
      queryFn: () => apiDetails(`${params.id}`)
    }
  )


  return {queryDetail}
}