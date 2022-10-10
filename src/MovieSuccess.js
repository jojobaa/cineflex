import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function MovieSuccess() {
    const { name, cpf, titleFilm, day, placeEmpty, hours } = useLocation().state

    return (
        <ContainerInfo>
            <h1>Pedido feito com sucesso!</h1>
            <FilmSession>
                <h2>Filme e sessão</h2>
                <p>{titleFilm}</p>
                <p>{day} {hours}</p>
            </FilmSession>
            <FilmSession>
                <h2>Ingressos</h2>
                {placeEmpty.map((v, i) => (
                    <p key={i}>Assento {v}</p>
                ))}

            </FilmSession>
            <FilmSession>
                <h2>Comprador</h2>
                <p>Nome: {name} </p>
                <p>CPF:{cpf}</p>
            </FilmSession>
            <Button>
                <Link to="/"><button>Voltar pra Home</button></Link>
            </Button>
        </ContainerInfo>
    )
}

const ContainerInfo = styled.div`
margin-top: 100px;
width: 324px;
height: 110px;
color: #247A6B;
font-size: 22px;
font-weight: 400;
font-family: 'Roboto', sans-serif; 
line-height: 1.5;
padding: 0px 20px;
display: flex;
flex-direction: column;
align-items: center;
a{
    text-decoration: none;
}

h1{
    font-weight: 700;
    margin-bottom: 30px;
}

`
const FilmSession = styled.div`
width: 324px;
height: 110px;
margin-bottom: 50px;
display: flex;
flex-direction: column;
h2{
    color: #293845;
    font-weight: 700;
}
p{
    color: #293845;
}
`
const Button = styled.div`
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
`