import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles'

export  function Header() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            headers {
                logo {
                  url
                }
                aboutMe
                work
                formation
                knowledge
                contact
              }
        }
    }
`)

    const { logo, aboutMe, work,
        formation, knowledge, contact } = data.alldata.headers[0]



    return (
        <>
            <S.Container>
                <figure>
                    <S.Logo src={logo.url} />
                </figure>
                <nav>
                    <S.BoxList>
                        <S.Link href="">
                            <li>{aboutMe}</li>
                        </S.Link>
                        <S.Link href="">
                            <li>{work}</li>
                        </S.Link>
                        <S.Link href="">
                            <li>{formation}</li>
                        </S.Link>
                        <S.Link href="">
                            <li>{knowledge}</li>
                        </S.Link>
                        <S.Link href="">
                            <li>{contact}</li>
                        </S.Link>
                    </S.BoxList>
                </nav>
            </S.Container>
        </>
    )
}
