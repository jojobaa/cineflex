import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import RenderMovies from "./RenderMovies";

export default function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)

        promise.then((res) => {
            console.log(res.data)
            setMovies(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])


    return (
        <>
            <Pfilm>
                <p>Selecione o filme</p>
            </Pfilm>
            <Film>
                {movies.map((film) => <RenderMovies key={film.id} film={film} />)}
            </Film>
        </>
    )
}

const Pfilm = styled.div`
p{
    color: #293845;
    font-size: 24px;
    font-family: 'Roboto', sans-serif; 
    margin: 30px 30px;
    display:flex;
    justify-content:center;
    align-items:center;
}
`
const Film = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`




