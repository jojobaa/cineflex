import styled from "styled-components";

export default function RenderMovies({ film }) {
  return (
    <RenderMovie>
      <img src={film.posterURL} />
    </RenderMovie>
  )
}
const RenderMovie = styled.div`
img{;
  height: 193px;
  margin: 10px;
  border: 10px solid white;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .3);
}
`