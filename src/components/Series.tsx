import { Link } from "react-router-dom"
import Button from "./Button"

const Series = ({query}) => {
  return (
    <>
      <ul className='card'>
        {query.data.data.results.map((serie) => (
          <div key={serie.id}>
            <h2>{serie.title}</h2>
            <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} width={100} height={180} alt={serie.title} />
            <p>{serie.type}</p>
          </div>
        ))}
      </ul>
      <Link to={'/details'}>
        <Button children={'ver detalle'} />
      </Link>
    </>
  )
}

export default Series