import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RenderMovies({ film }) {
    return (
        <RenderMovieInformation>
            <Link to="/">
                <h2>Selecione o horário</h2>
            </Link>
            <MovieHours>
            <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </MovieHours>
            <MovieHours>
            <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </MovieHours>
        </RenderMovieInformation>
    )
}

const RenderMovieInformation = styled.div`
h2{
    color: #293845;
    font-size: 24px;
    font-family: 'Roboto', sans-serif; 
    margin: 30px 30px;
    display:flex;
    justify-content:center;
    align-items:center;
}
`
const MovieHours = styled.div`
margin-left:30px;
p{
    margin-top:20px;
    font-family: 'Roboto', sans-serif; 
    font-size: 20px;
}
button{
    border: none;
    outline: none;
    width: 82px;
    height: 43px;
    margin-top:20px;
    margin-right:10px;
    border-radius:3px;
    background-color: #E8833A;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif; 
    font-size:18px;
}
`