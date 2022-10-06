import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RenderMovies() {
    const [infoFilm, setInfoFilm] = useState({})
    const { idFilm } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)

        promise.then((res) => {
            setInfoFilm(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])

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
            <Footer>
                <img src={infoFilm.posterURL} alt=''/>
                <p>{infoFilm.title}</p>
            </Footer>
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
const Footer = styled.div`
display:flex;
background-color:#DFE6ED;
box-shadow: 4px 1px 1px rgba(0, 0, 0, .3);
img{
    width:48px;
    heigth:72px;
    margin-left:20px;
}
p{
    display:flex;
    justify-content:center;
    align-items:center;
    color:#293845;
    font-family: 'Roboto', sans-serif; 
    font-size:26px;
    margin-left:20px;
}
`