import styled from "styled-components"

export default function MovieSuccess() {
    return (
        <ContainerInfo>
            <h1>Pedido feito com sucesso!</h1>
            <FilmSession>
                <h2>Filme e sessão</h2>
                <p>Enola Holmes 24/06/2021 15:00</p>
            </FilmSession>
            <FilmTickets>
                <h2>Ingressos</h2>
                <p>Assento 15 Assento 16</p>
            </FilmTickets>
            <FilmPerson>
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro CPF: 123.456.789-10</p>
            </FilmPerson>
            <Button>
                <button>Voltar pra Home</button>
            </Button>
        </ContainerInfo>
    )
}

const ContainerInfo = styled.div`
margin-top: 100px;
h1{
    width: 324px;
    height: 110px;
    color: #247A6B;
    font-size: 24px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif; 
}
`
const FilmSession = styled.div`
margin-top: 10px;
`
const FilmTickets = styled.div`
margin-top: 10px;
`
const FilmPerson = styled.div`
margin-top: 10px;
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