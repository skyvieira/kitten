import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        abouts {
          title
          about
          line1
          line2
          line3
          line4
          sideimg {
            url
          }
        }
      }
    }
  `);

  const query = data.kittendata.abouts[0];
  
  return (
    <S.Container image={query.sideimg.url}>
      <S.Content>
        <S.Title>{query.title}</S.Title>
        <S.About>{query.about}</S.About>
        <S.List>
          <S.Text>{query.line1}</S.Text>
          <S.Text>{query.line2}</S.Text>
          <S.Text>{query.line3}</S.Text>
          <S.Text>{query.line4}</S.Text>
        </S.List>
      </S.Content>
      <S.Gradient />
    </S.Container>
  );
}