import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat";

export default function MovieSession() {
    // const [hours, setHours] = useState([])
    // const [day, setDay] = useState([])
    // const [film, setFilm] = useState([])
    const [seatss, setSeats] = useState([])
    const [idSeats, setIdSeats] = useState([])
    const [placeEmpty, setPlaceEmpty] = useState([])
    const { idSeat } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeat}/seats`)

        promise.then((res) => {
            // setHours(res.data.name)
            // setDay(res.data.day)
            // setFilm(res.data.movie)
            setSeats(res.data.seats)
        })
        promise.catch((err) => {
            console.log(err.response.data)
            // alert('ocorreu um erro, tente novamente!')
        })

    }, [idSeat])

    return (
        <>
            <SessionMovie>
                <Link to="/"><h2>Selecione o(s) assento(s)</h2></Link>
                <ContainerSeats>
                    {seatss.map((value, i) =>
                    (<Seat key={i} id={value.id} number={value.name} available={value.isAvailable} idSeats={idSeats}
                        setIdSeats={setIdSeats} placeEmpty={placeEmpty} setPlaceEmpty={setPlaceEmpty} />)
                    )}
                </ContainerSeats>

                <SeatsInfo>
                    <SeatSelected><p>Selecionado</p></SeatSelected>
                    <SeatAvailable><p>Disponível</p></SeatAvailable>
                    <SeatUnavailable><p>Indisponível</p></SeatUnavailable>
                </SeatsInfo>

                <form>
                    <div className="NomeComprador">
                        <h2>Nome do comprador:</h2>
                        <input type='text' placeholder="Digite seu nome..."></input>
                    </div>
                    <div className="CpfComprador">
                        <h2>CPF do comprador:</h2>
                        <input type='text' placeholder="Digite seu CPF..."></input>
                    </div>
                </form>
            </SessionMovie>
        </>
    )
}

const ContainerSeats = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-wrap: wrap;
`
const SessionMovie = styled.div`
margin-top: 150px;
h2{
    color: #293845;
    font-size: 24px;
    font-family: 'Roboto', sans-serif; 
    margin: 30px 30px;
    display:flex;
    justify-content:center;
    align-items:center;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const SeatSelected = styled.div`
width:26px;
height:26px;
background-color:#1AAE9E;
border-radius:15px;
border: 1px solid #0E7D71;

`
const SeatAvailable = styled.div`
width:26px;
height:26px;
background-color:#C3CFD9;
border-radius:15px;
border: 1px solid #808F9D;

`
const SeatUnavailable = styled.div`
width:26px;
height:26px;
background-color:#FBE192;
border-radius:15px;
border: 1px solid #F7C52B;

`
const SeatsInfo = styled.div`
width: 90%;
display: flex;
margin-top: 30px;
justify-content: space-around;
p{
    margin-top: 40px;
    font-size: 13px;
    font-family: 'Roboto', sans-serif; 
    color: #4E5A65;
}
`

