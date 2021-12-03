import React from 'react';
import { Link,  graphql, useStaticQuery } from 'gatsby';
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
                        <S.LinkMenu to="/">
                            <li>{aboutMe}</li>
                        </S.LinkMenu>
                        <S.LinkMenu to="/works">
                            <li>{work}</li>
                        </S.LinkMenu>
                        <S.LinkMenu to="">
                            <li>{formation}</li>
                        </S.LinkMenu>
                        <S.LinkMenu to="/skills">
                            <li>{knowledge}</li>
                        </S.LinkMenu>
                        <S.LinkMenu to="#Contact">
                            <li>{contact}</li>
                        </S.LinkMenu>
                    </S.BoxList>
                </nav>
            </S.Container>
        </>
    )
}
