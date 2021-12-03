import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

        Aos.init();

    return (
        <>
            <S.Container id="Contact">
                <div 
                data-aos="fade-up"
                data-aos-duration="3000">
                <S.Title >{title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
                </div>
                <S.BoxLinks>
                <figure>
                    <a href="https://www.linkedin.com/in/leandro-aragao-522841207/" alt="" target="_blank">
                        <S.Link src={instagram.url} alt="" />
                    </a>
                </figure>
                <figure>
                    <a href="https://github.com/leandroaragao31" alt=""  target="_blank">
                        <S.Link src={github.url} alt="" />
                    </a>
                </figure>
                <figure>
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
