import styled  from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
 
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
    @media (max-width: 500px){
      height:80%;
      
    }

`
 export const Title = styled.h1`
    background-color:#CDB79E;
    text-align: center;
    font-size:2.5vw;
    
    @media (max-width: 500px){
      font-size:4vw;
      
    }
  
 `

export const BoxCard = styled.figure`
  height:90vh;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items:center;
  
@media (max-width: 500px){
  display:flex;
  flex-direction:column;
  height:65vh;
  width:80%;
  justify-content:space-evenly;
  flex-wrap:wrap;
  align-items:center;
 
}

  a{
    text-decoration:none;
    color:#000;
    display:flex;
    flex-direction:column;
  } 


  p{
    text-align:center;
    font-size:1.4vh;
    margin-top:2vh;
 
  }


img{
    width:22.9vw;
    cursor: pointer;
    margin-left:2vw;
    border: 0.2vw solid;
    transition: 0.5s all ease-in;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
 

    @media (max-width: 500px){
      width:30vw;
      margin-right:5vw;
      
    }
   
}  

`

export const Route = styled(Link)`
  text-align:center;
  width:23vw;
  padding-top:3vw;
  margin:2vh 2vw;
  font-size:1.3vw;
  font-weight:600;
  text-transform:capitalize;
  transition: 1 all ease-in;
  &:hover{
    color:#483D8B;
    font-size:1.4vw;
    
  }
  @media(max-width: 768px){
     font-size:2.8vw;
    }
`

export const Card = styled.div`
  width:30%;
  
 


`
