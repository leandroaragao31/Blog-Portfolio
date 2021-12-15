import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Footer } from '../Components/Footer/footer'
import { Header } from '../Components/Header/header'
import styled from 'styled-components';
import { GlobalStyle } from '../Components/stylesPages/styles';




const Container = styled.section`
    width:100%;
    
    background-color:#CDB79E;
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    align-items:center;
    flex-wrap:wrap;
  


    h1{
        
        text-align: center;
        font-size:2.5vw;
        padding-bottom:5vh;
        @media(max-width:500px){
        font-size:3.5vw;
    }
    }

    div{

     height:90vh;
     display:flex;
     flex-wrap:wrap;
     flex-direction:column;
    justify-content:center;
    align-items:center;
    }

    img{
    width:40vw;
    cursor: pointer;
    transition: 0.5s all ease-in;
    margin-left:2vw;
    border:solid;
    position:relative;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    @media(max-width:500px){
        width:55vw;
    }

    &:hover{
    transform: scale(90%);
    border-radius:30px;
    background-color: rgba(28,28,28, 0.100);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      opacity:0.6;
    }
    }
`

const Paragraph = styled.p`
    font-size:1.5vw;
    width:30%;
    font-weight:200;
    margin-top:4vh;
    text-align:justify;
    @media(max-width:500px){
        font-size:4vw;
        font-weight:500;
        text-align:left;
    }
    
`


const Link = styled.a`
text-decoration:none;
font-size:1.5vw;
padding-bottom:6vh;
@media(max-width:500px){
    font-size:4vw;
    font-weight:bold;
}

`




export default function Naruto() {

    const data = useStaticQuery(graphql`
    
    query{
        alldata{
            works {
                narutoPage {
                  url
                }
              }
        }
    }
    
    
    `)



    const { narutoPage } = data.alldata.works[0]




    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container>
                <div>
                    <h1>Naruto Page</h1>
                    <img src={narutoPage.url} alt="naruto" />
                    <Paragraph>
                        This site was made using gatsby, graphql, react, styled-components and animation,
                        a free theme challenge aimed at learning and train the tools mentioned above.
                    </Paragraph>
                </div>
                <Link href="https://cocky-bell-2604bd.netlify.app/" alt="link-naruto" target="_blank">
                    <p>click here for visiting website</p>
                </Link>

            </Container>
            <Footer />
        </div>
    )
}

