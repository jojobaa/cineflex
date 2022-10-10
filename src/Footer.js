import styled from "styled-components";

export default function Footer({ posterURL, title, weekday, day }) {
    return (
        <Footer2>
            <img src={posterURL} alt='' />
            <ContainerFooter>
                <p>{title}</p>
                {weekday ? (<p>{weekday} - {day}</p>) : ('')}
            </ContainerFooter>
        </Footer2>
    )
}

const Footer2 = styled.div`
width:100%;
height:100px;
display:flex;
background-color:#DFE6ED;
box-shadow: 4px 1px 1px rgba(0, 0, 0, .3);
position: fixed;
bottom: 0;
left: 0;
img{
    margin-top:5px;
    width:48px;
    min-height:72px;
    margin-left:20px;
    border: 10px solid white;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .3);
}
p{
    display:flex;
    justify-content:center;
    align-items:center;
    color:#293845;
    font-family: 'Roboto', sans-serif; 
    font-size:26px;
    margin-left:20px;
}
`
const ContainerFooter = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 20px;
`