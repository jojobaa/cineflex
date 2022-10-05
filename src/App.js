import styled from "styled-components";
import Movies from "./Movies";
import MovieId from "./MovieId";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Header><h1>CINEFLEX</h1></Header>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/movie-id" element={<MovieId/>}/>
                {/* <Route path="/movie-session" element={<MovieSession/>}/> 
                <Route path="/movie-success" element={<MovieSuccess/>}/>    */}
            </Routes>
        </BrowserRouter>
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

