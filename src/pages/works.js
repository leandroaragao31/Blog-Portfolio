import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
// import Slider from "react-slick";
import * as S from './styles';
import { Header } from '../Components/Header/header';
import { Footer } from '../Components/Footer/footer';
import './animation.css'

export default function Works() {

  const data = useStaticQuery(graphql`
        query{
            alldata{
                works {
                    title
                    naruto {
                      url
                    }
                    geroflix {
                      url
                    }
                    recipes {
                      url
                    }
                    strytegy {
                      url
                    }
                    taxi {
                      url
                    }
                    shoppingCar {
                      url
                    }
                  }
            }
        }
    `)

  const { title, naruto, geroflix,
    recipes, strytegy, taxi,
    shoppingCar } = data.alldata.works[0]

  


  // const settings = {
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  // };


  return (
    <>
      <Header />
      <S.GlobalStyle />

      <S.Container>
        <S.Title>{title}</S.Title>
        {/* <Slider style={{ width: '95%', height: '60vh', display: 'flex', alignItems:'center', }} {...settings}> */}
        <S.BoxCard >
            <a href="https://cocky-bell-2604bd.netlify.app/" alt="" target="_blank">
            <img class="bounce-in-top" src={naruto.url} alt="" />
            </a>
          
          <img class="bounce-in-top"src={strytegy.url} alt="" />
          <img class="bounce-in-top" src={recipes.url} alt="" />
          <img class="bounce-in-top" src={taxi.url} alt="" />
          <img class="bounce-in-top" src={geroflix.url} alt="" />
          <img class="bounce-in-top" src={shoppingCar.url} alt="" />
        </S.BoxCard>
        {/* </Slider> */}
      </S.Container>
      <Footer />
    </>
  )
}
