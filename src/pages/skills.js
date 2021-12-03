import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';
import { Header } from '../Components/Header/header';
import { Footer } from '../Components/Footer/footer';

export default function Skills() {

    const data = useStaticQuery(graphql`
          query{
              alldata{
                skills {
                    css3 {
                      url
                    }
                    gatsby {
                      url
                    }
                    github {
                      url
                    }
                    graphQl {
                      url
                    }
                    html5 {
                      url
                    }
                    javascript {
                      url
                    }
                    npm {
                      url
                    }
                    react {
                      url
                    }
                    styledComponents {
                        url
                      }
                  }
              }
          }
      `)
  
    const { css3, gatsby, github,
        graphQl, html5, javascript,
        npm, react, styledComponents } = data.alldata.skills[0]
    
    
    
    
    
    
    return (
        <>
        
        <Header />
        <S.GlobalStyle />
  
        <S.Container>
        <S.Title>My technique Skills</S.Title>
          <S.BoxCard
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <S.Cards src={gatsby.url} alt="" />
            <S.Cards style={{height:'14.5vh'}} src={github.url} alt="" />
            <S.Cards  style={{height:'14.5vh'}} src={graphQl.url} alt="" />
             <S.Cards style={{height:'15.5vh'}} src={css3.url} alt="" />
            <S.Cards src={html5.url} alt="" />
            <S.Cards style={{height:'15.5vh'}} src={javascript.url} alt="" />
            <S.Cards style={{height:'15.5vh'}} src={npm.url} alt="" />
            <S.Cards src={react.url} alt="" />
            <S.Cards style={{height:'15.5vh'}} src={styledComponents.url} alt="" />
          </S.BoxCard>
        </S.Container>
        <Footer />
      </>
    )
}
