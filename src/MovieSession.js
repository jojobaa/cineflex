import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";
import Forms from "./Forms";

export default function MovieSession() {
    const [hours, setHours] = useState([])
    const [day, setDay] = useState([])
    const [film, setFilm] = useState([])
    const [seatss, setSeats] = useState([])
    const [idSeats, setIdSeats] = useState([])
    const [placeEmpty, setPlaceEmpty] = useState([])
    const { idSeat } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeat}/seats`)

        promise.then((res) => {
            setHours(res.data.name)
            setDay(res.data.day)
            setFilm(res.data.movie)
            setSeats(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
            alert('ocorreu um erro, tente novamente!')
        })

    }, [idSeat])

    return (
        <>
            <SessionMovie> {seatss.length === 0 ? '' :
                <>
                    <h2>Selecione o(s) assento(s)</h2>
                    <ContainerSeats>
                        {seatss.seats.map((value, i) =>
                        (<Seat data-identifier="seat" key={i} id={value.id} number={value.name} available={value.isAvailable} idSeats={idSeats}
                            setIdSeats={setIdSeats} placeEmpty={placeEmpty} setPlaceEmpty={setPlaceEmpty} />)
                        )}
                    </ContainerSeats>

                    <SeatsInfo>
                        <SeatSelected data-identifier="seat-selected-subtitle"><p>Selecionado</p></SeatSelected>
                        <SeatAvailable data-identifier="seat-available-subtitle"><p>Disponível</p></SeatAvailable>
                        <SeatUnavailable data-identifier="seat-unavailable-subtitle"><p>Indisponível</p></SeatUnavailable>
                    </SeatsInfo>
                    <Forms film={film} hours={hours} day={day.weekday} date={day.date}
                     idSeats={idSeats} placeEmpty={placeEmpty}/>
                     
                    <Footer posterURL={seatss.movie.posterURL} title={seatss.movie.title}
                        weekday={day.weekday} day={day.date} />
                </>}
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
margin-top: 100px;
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
const SeatSelected = styled.div`
width:26px;
height:26px;
background-color:#1AAE9E;
border-radius:15px;
border: 1px solid #0E7D71;
display: flex;
justify-content: center;
align-items: center;
p{
    margin-top: 60px;
    font-size: 13px;
    font-family: 'Roboto', sans-serif; 
    color: #4E5A65;
}

`
const SeatAvailable = styled.div`
width:26px;
height:26px;
background-color:#C3CFD9;
border-radius:15px;
border: 1px solid #808F9D;
display: flex;
justify-content: center;
align-items: center;
p{
    margin-top: 60px;
    font-size: 13px;
    font-family: 'Roboto', sans-serif; 
    color: #4E5A65;
}

`
const SeatUnavailable = styled.div`
width:26px;
height:26px;
background-color:#FBE192;
border-radius:15px;
border: 1px solid #F7C52B;
display: flex;
justify-content: center;
align-items: center;
p{
    margin-top: 60px;
    font-size: 13px;
    font-family: 'Roboto', sans-serif; 
    color: #4E5A65;
}

`
const SeatsInfo = styled.div`
display: flex;
margin-top: 10px;
justify-content: space-around;

`

