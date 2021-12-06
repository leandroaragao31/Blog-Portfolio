import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styled'
import   '../Main/animation.css'


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

    

    const { profileImg, paragraph, title,
        subtitle, paragraphAbout } = data.alldata.mains[0]

    return (
        <>
            <S.Container >

                <S.Boxinformation  >
                    <p class="bounce-in-top">{paragraph}</p>
                    <h1 class="bounce-in-top">{title}</h1>
                    <p class="bounce-in-top">{subtitle}</p>
                    <p class="bounce-in-top">{paragraphAbout}</p>
                </S.Boxinformation>
                <figure class="flip-in-ver-right">
                    <S.ProfilePhoto src={profileImg.url} alt="" />
                </figure>
            </S.Container>
        </>
    )
}
