import styled from "styled-components";
import Movies from "./Movies";

export default function App() {
    return (
        <>
            <Header><h1>CINEFLEX</h1></Header>
            <Movies></Movies>
        </>
    )
}

const Header = styled.div`
width: 100vw;
min-height: 5vh;
display:flex;
justify-content:center;
align-items:center;
background-color: #C3CFD9;
h1{
    height=67px;
    color: #E8833A;
    font-size: 34px;
    font-family: 'Roboto', sans-serif; 
    padding: 15px 15px;
}
`

