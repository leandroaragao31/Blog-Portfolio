import styled from "styled-components";

export const Container = styled.section`
    /* background-image: url(${props => props.img}); */
    background-color:#CDB79E;
    background-attachment:fixed;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
    height:85vh;

`

export const Boxinformation = styled.div`
    color:	#1a1a1a;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:5vw;
    height: 85vh;
    width:40%;

    h1{
        font-size:2.5vw;
        font-weight:600;
        
    }

    p{
        margin-top:2vh;
        font-weight:200;
        font-size:1.4vw;
    }

`
export const ProfilePhoto = styled.img`
    width:25vw;
    border:solid;
    border-radius: 10px 10px 10px 10px;
    &:hover{
        
    }
`