import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
// import Slider from "react-slick";
import * as S from './styles';
import { Header } from '../Components/Header/header';
import { Footer } from '../Components/Footer/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

  Aos.init();


  // const settings = {
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  // };


  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      <Header />
      <S.GlobalStyle />

      <S.Container>
        <S.Title>{title}</S.Title>
        {/* <Slider style={{ width: '95%', height: '60vh', display: 'flex', alignItems:'center', }} {...settings}> */}
        <S.BoxCard
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <a href="https://cocky-bell-2604bd.netlify.app/" alt="" target="_blank">
            <S.Cards src={naruto.url} alt="" />
            </a>
          
          <S.Cards src={strytegy.url} alt="" />
          <S.Cards src={recipes.url} alt="" />
          <S.Cards src={taxi.url} alt="" />
          <S.Cards src={geroflix.url} alt="" />
          <S.Cards src={shoppingCar.url} alt="" />
        </S.BoxCard>
        {/* </Slider> */}
      </S.Container>
      <Footer />
    </>
  )
}
