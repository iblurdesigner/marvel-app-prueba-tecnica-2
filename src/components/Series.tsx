import { Link } from "react-router-dom"
import Button from "./Button"

const Series = ({query}) => {
  return (
    <>
      <ul className="series">
        {query.data.data.results.map((serie) => (
          <div key={serie.id} className="card">
            <h2>{serie.title}</h2>
            <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} width={100} height={180} alt={serie.title} />
            <p>{serie.type}</p>

            <Link to={'/details'}>
              <Button onClick={ () => {}} children={'ver detalle'} />
            </Link>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Series