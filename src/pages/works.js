import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import * as S from '../Components/stylesPages/styles';
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







  return (
    <>
      <Header />
      <S.GlobalStyle />
<S.Title>{title}</S.Title>
      <S.Container>
        

        <S.BoxCard >

          <S.Card>
            <img className="slide-in-top" src={naruto.url} alt="" />
            <S.Route  className="slide-in-top"  to="/naruto">See More</S.Route>
          </S.Card>
          <S.Card>
            <img className="slide-in-top" src={strytegy.url} alt="" />
            <S.Route className="slide-in-top"  to="/strytegy">See More</S.Route>
          </S.Card>
          <S.Card>
            <img className="slide-in-top" src={recipes.url} alt="" />
            <S.Route className="slide-in-top"  to="">See More</S.Route>
          </S.Card>
          <S.Card>
            <img className="slide-in-top" src={taxi.url} alt="" />
            <S.Route className="slide-in-top"  to="">See More</S.Route>
          </S.Card>
          <S.Card>
            <img className="slide-in-top" src={geroflix.url} alt="" />
            <S.Route className="slide-in-top"  to="">See More</S.Route>
          </S.Card>
          <S.Card>
            <img className="slide-in-top" src={shoppingCar.url} alt="" />
            <S.Route className="slide-in-top"  to="">See More</S.Route>
          </S.Card>

        </S.BoxCard>

      </S.Container>
      <Footer />
    </>
  )
}
