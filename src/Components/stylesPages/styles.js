import styled  from "styled-components";
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    scroll-behavior: smooth; 
    font-family:'Outfit', sans-serif;
    
  }
`;
 
export const Container = styled.section`
    width:100%;
    height: 100vh;
    background-color:#CDB79E;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
`
 export const Title = styled.h1`
    background-color:#CDB79E;
    text-align: center;
    font-size:2.5vw;
    margin-top:3vh;
  
 `

export const BoxCard = styled.figure`
  width:90vw;
  height:90vh;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;

  a{
    text-decoration:none;
    color:#000;
  }

  p{
    text-align:center;
    margin-top:2vh;
  }


img{
    width:23vw;
    cursor: pointer;
    transition: 0.5s all ease-in;
    margin-left:2vw;
    border:solid;
    position:relative;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    &:hover{
    transform: scale(103%);
    
    border-radius:30px;
    background-color: rgba(28,28,28, 0.100);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
    }
}

`