import { Link, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import { useQuery } from '@tanstack/react-query'
import { apiDetails } from '../../service/apiDetails'


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

const Details = () => {

  const queryDetail = useDetails()

  return (
    <>
      <div>Esta es la pagina de detalles</div>

      <div>
        {
          queryDetail.queryDetail.data?.data.results.map( serie => (
            <div key={serie.id}>
              <h1>{serie.title}</h1>
              <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} alt={serie.title} />
              <p>{serie.description}</p>
            </div>
          ))
        }
      </div>
      
      <Link to={'/'}>
        <Button onClick={ () => {}} children={'regresar'} />
      </Link>
    </>
  )
}

export default Details