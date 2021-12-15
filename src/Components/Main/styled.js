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
    @media(max-width:500px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;]
        height:65vh;
    }

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
        @media(max-width:500px){
            font-size:3.2vw;
        }
        
    }

    p{
        margin-top:2vh;
        font-weight:200;
        font-size:1.4vw;
        @media(max-width:500px){
            font-size:3vw;
            text-align:justify;
        }
    }

`
export const ProfilePhoto = styled.img`
    width:25vw;
    border:solid;
    border-radius: 10px 10px 10px 10px;
    @media(max-width:500px){
        width:35vw;
    }
`