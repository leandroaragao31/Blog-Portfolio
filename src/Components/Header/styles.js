import styled from "styled-components";
import { Link } from "gatsby"

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:14vh;
    border-bottom:solid 2px;
    background-color:#F5F5DC;
    @media(max-width:500px){
        height:10vh;
    }
`

export const Logo = styled.img`
    width:13vw;
    padding:2vw;
    
`

export const BoxList = styled.ul`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:70vw;
    height:10vh;
    list-style:none;
    
  
    
    li{
        font-size:1.5vw;
        font-weight:600;
        transition: 0.5 all ease-in-out;
        &:hover{
        color:#FFC125;
        border-bottom:solid 3px;
    }
    }

    @media (max-width: 500px){
        li{
            font-size:3vw;
        }
    }

`

export const LinkMenu = styled(Link)`
    text-decoration:none;
    color:#1a1a1a;
 
    

`
