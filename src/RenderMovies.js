import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RenderMovies({ film }) {

  return (
    <RenderMovie data-identifier="movie-outdoor">
      <Link to={`/movieId/${film.id}`}>
        <img src={film.posterURL} alt=''/>
      </Link>
    </RenderMovie>
  )
}
const RenderMovie = styled.div`
img{
  height: 193px;
  margin: 10px;
  border: 10px solid white;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .3);
}
`