import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";

export default function Feedback() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        feedbacks {
          title
          customer1
          customer2
          video1
          video2
        }
      }
    }
  `);

  const query = data.kittendata.feedbacks[0];

  return (
    <S.Container>
      <S.Title>{query.title}</S.Title>
      <S.Wrapper>
        <S.Video>
          <iframe width="100%" height="100%" src={query.video1} frameBorder="0" title={query.customer1}></iframe>
          <S.Description>{query.customer1}</S.Description>
        </S.Video>
        <S.Video>
          <iframe width="100%" height="100%" src={query.video2} frameBorder="0" title={query.customer2}></iframe>
          <S.Description>{query.customer2}</S.Description>
        </S.Video>
      </S.Wrapper>
    </S.Container>
  );
}