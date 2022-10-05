import styled from "styled-components";

export default function RenderMovies({ film }) {
  return (
    <RenderMovie>
      <img src={film.posterURL} />
    </RenderMovie>
  )
}
const RenderMovie = styled.div`
display:flex;
img{;
  width: 129px;
  height: 193px;
}
`