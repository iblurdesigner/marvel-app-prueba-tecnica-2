
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Details = () => {
  return (
    <>
      <div>Esta es la pagina de detalles</div>

      <Link to={'/'}>
        <Button children={'regresar'} />
      </Link>
    </>
  )
}

export default Details