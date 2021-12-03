import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styled'
import Aos from 'aos';
import 'aos/dist/aos.css';


export function Main() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            mains {
                profileImg {
                  url
                }
                paragraph
                title
                subtitle
                paragraphAbout
              }
        }
    }
`)

    Aos.init();

    const { profileImg, paragraph, title,
        subtitle, paragraphAbout } = data.alldata.mains[0]

    return (
        <>
            <S.Container >

                <S.Boxinformation
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" >
                    <p>{paragraph}</p>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <p>{paragraphAbout}</p>
                </S.Boxinformation>
                <figure data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500">
                    <S.ProfilePhoto src={profileImg.url} alt="" />
                </figure>
            </S.Container>
        </>
    )
}
