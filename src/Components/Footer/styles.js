import styled from "styled-components";

export const Container = styled.section`
    height:40vh;
    background-color:#8B7B8B;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;

`

export const Title = styled.h1`
    font-weight:600;
    font-size:2.3vw;
    text-align:center;
    padding-bottom:2vh;
`

export const SubTitle = styled.p`
    font-weight:200;
    font-size:1.3vw;

`

export const BoxLinks = styled.div`
    display:flex;
    width: 50vw;
    align-items:center;
    justify-content:space-evenly;
`

export const Link = styled.img`
    width:10vw;
    border:none;
    &:hover{
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }

`

export const BoxRights = styled.div`
    background-color:#6E7B8B;
    height:3vh;
    border-top: 1px solid;
p{
    text-align:center;
    font-weight:200;
    font-family:'outfit', sans-serif;
    color:#1a1a1a;
}
`