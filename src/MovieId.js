import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function RenderMovies() {
    const [infoFilm, setInfoFilm] = useState({})
    const [infoSession, setInfoSession] = useState([])
    const { idFilm } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)

        promise.then((res) => {
            setInfoFilm(res.data)
            setInfoSession(res.data.days)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [idFilm])

    return (
        <RenderMovieInformation>
            <Link to="/">
                <h2>Selecione o horário</h2>
            </Link>
            <ContainerMovie>
            {infoSession.map((s) =>
                <MovieHours key={s.id}>
                    <p>{s.weekday} - {s.date}</p>
                    {s.showtimes.map((showtime) => <Link to={`/movie-session/${showtime.id}`}><button>{showtime.name}</button></Link> )} 
                </MovieHours>
            )}
            </ContainerMovie>
            <Footer posterURL={infoFilm.posterURL} title={infoFilm.title}/>
        </RenderMovieInformation>
    )
}

const RenderMovieInformation = styled.div`
margin-top:100px;
height:200px;
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
const ContainerMovie = styled.div`
height: 950px;
margin-bottom: 900px;
`
