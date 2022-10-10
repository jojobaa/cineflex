import { useState } from "react"
import styled from "styled-components"

export default function Seat({ id, number, available, idSeats, setIdSeats, placeEmpty, setPlaceEmpty }) {
    const [selected, setSelected] = useState(false)

    return (
        <>
            {available ? (
                <MovieSeat selected={selected} onClick={() => {
                    if (!selected) {
                        setSelected(!selected)
                        const NewSeat = [...idSeats, Number(id)]
                        setIdSeats(NewSeat)
                        const NewPlaceEmpty = [...placeEmpty, number]
                        setPlaceEmpty(NewPlaceEmpty)
                    } else {
                        setSelected(!selected)
                        const NewSeat = idSeats.filter(value => value !== id)
                        setIdSeats(NewSeat)
                        const NewPlaceEmpty = placeEmpty.filter(value => value !== number)
                        setPlaceEmpty(NewPlaceEmpty)
                    }
                }}>
                    <p>{number}</p>
                </MovieSeat>

            ) : (
                <MovieSeatUnavailable onClick={() => {
                    alert('esse assento não está disponível')
                }}>
                    <p>{number}</p>

                </MovieSeatUnavailable>
            )}
        </>
    )
}

const MovieSeat = styled.div`
width:26px;
height:26px;
display:flex;
justify-content:center;
align-items:center;
background-color:${props => props.selected ? ('#1AAE9E') : ('#C3CFD9')};
border-radius:15px;
border: ${props => props.selected ? ('1px solid #0E7D71') : ('1px solid #7B8B99')};
margin-right: 5px;
margin-left: 5px;
margin-bottom: 10px;
`
const MovieSeatUnavailable = styled.div`
width:26px;
height:26px;
display:flex;
justify-content:center;
align-items:center;
background-color:#FBE192;
border-radius:15px;
border: 1px solid #F7C52B;
margin-right: 5px;
margin-left: 5px;
margin-bottom: 10px;
`