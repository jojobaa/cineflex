import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Forms({ hours, film, day, idSeats, placeEmpty }) {
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const titleFilm = film.title
    const navigate = useNavigate()

    function FormInfo(e) {
        e.preventDefault()

        if (idSeats.length < 1) {
            alert("Selecione um assento")
        } else {
            const body = { ids: idSeats, name, cpf }

            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)

            promise.then((res) => {
                navigate("/movie-success", { state: { name, cpf, titleFilm, day, placeEmpty, hours } })
            })
            promise.catch((err) => {
                console.log(err.response.data)
            })
        }
    }

    return (
        <Form>
            <form onSubmit={FormInfo}>
                <div className="NomeComprador">
                    <h3 data-identifier="buyer-name-input">Nome do comprador:</h3>
                    <input data-identifier="movie-session-infos-reserve-finished"type='text' placeholder="Digite seu nome..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    ></input>
                </div>
                <div className="CpfComprador">
                    <h3 data-identifier="buyer-cpf-input">CPF do comprador:</h3>
                    <input data-identifier="buyer-infos-reserve-finished" type='text' placeholder="Digite seu CPF..."
                        onChange={(e) => setCpf(e.target.value)}
                        value={cpf}
                        required
                    ></input>
                </div>
                <button data-identifier="reservation-btn">Reservar assento(s)</button>
            </form>
        </Form>
    )
}

const Form = styled.div`
margin-bottom: 150px;
form{
    margin-top:80px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    h3{
        color: #293845;
        font-size: 18px;
        font-family: 'Roboto', sans-serif; 
        margin-bottom: 5px;
    }
    input{
       width: 327px;
       height: 51px;
       margin-bottom: 5px;
       border: 1px solid #D4D4D4;
    }
    input::placeholder{
        color: #AFAFAF;
        font-size: 18px;
        font-family: 'Roboto', sans-serif; 
        font-style: italic;
    }
    button{
    display: flex;
    justify-content:center;
    align-items:center;
    width: 225px;
    height: 42px;
    color: #ffffff;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif; 
    font-size: 18px;
    margin-top:50px;
}
}
`