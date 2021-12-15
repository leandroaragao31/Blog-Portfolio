import styled from "styled-components";
import { Link } from "gatsby"

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:14vh;
    border-bottom:solid 2px;
    background-color:#F5F5DC;
`

export const Logo = styled.img`
    width:13vw;
    padding:2vw;
    
`

export const BoxList = styled.li`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:70vw;
    height:10vh;
    list-style:none;
    
  
    
    a{
        font-size:1.5vw;
        font-weight:600;
        transition: 0.5 all ease-in-out;
        &:hover{
        color:#FFC125;
        border-bottom:solid 3px;
    }
    }

    @media (max-width: 768px){
        a{
            font-size:1.8vw;
        }
    }

`

export const LinkMenu = styled(Link)`
    text-decoration:none;
    color:#1a1a1a;
 
    

`
