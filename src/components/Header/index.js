import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";
import Menu from "../Menu";
import Button from "../Button";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        headers {
          title
          subtitle
          description
          reserve
          background {
            url
          }
        }
      }
    }
  `);

  const query = data.kittendata.headers[0];

  return (
    <S.Container id="home" background={query.background.url}>
      <Menu />
      <S.Wrapper>
        <S.Title>{query.title}</S.Title>
        <S.Subtitle>{query.subtitle}</S.Subtitle>
        <S.Description>{query.description}</S.Description>
        <Button content={query.reserve} />
      </S.Wrapper>
    </S.Container>
  );
}