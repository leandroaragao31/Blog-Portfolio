import React from 'react';
import {  graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';
import './animation.css'

export function Footer() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            footers {
                title
                subtitle
                copyrights
                github {
                  url
                }
                instagram {
                  url
                }
                linkedin {
                  url
                }
              }
        }
    }
`)


    const { title, subtitle, github,
        instagram, linkedin, copyrights} = data.alldata.footers[0]

       

    return (
        <>
            <S.Container id="Contact">
                <div className="slide-in-blurred-bottom" >
                <S.Title >{title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
                </div>
                <S.BoxLinks>
                <figure className="scale-in-hor-center">
                    <a href="https://www.linkedin.com/in/leandro-aragao-522841207/" alt="" target="_blank">
                        <S.Link src={instagram.url} alt="" />
                    </a>
                </figure>
                <figure className="scale-in-hor-center">
                    <a href="https://github.com/leandroaragao31" alt=""  target="_blank">
                        <S.Link src={github.url} alt="" />
                    </a>
                </figure>
                <figure className="scale-in-hor-center">
                    <a href="https://api.whatsapp.com/send?phone=5521996471703" alt=""  target="_blank">
                        <S.Link src={linkedin.url} alt="" />
                    </a>
                </figure>
                </S.BoxLinks>
               
            </S.Container>
            <S.BoxRights>
               <p> {copyrights} </p>
            </S.BoxRights>

        </>
    )

}
