import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";
import Button from "../Button";

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        services {
          image1 {
            url
          }
          image2 {
            url
          }
          image3 {
            url
          }
          image4 {
            url
          }
          category1
          category2
          category3
          category4
          morebtn
        }
      }
    }
  `);

  const query = data.kittendata.services[0];

  const content = [
    {
      text: query.category1,
      img: query.image1.url,
    },
    {
      text: query.category2,
      img: query.image2.url,
    },
    {
      text: query.category3,
      img: query.image3.url,
    },
    {
      text: query.category4,
      img: query.image4.url,
    }
  ];

  return (
    <S.Wrapper>
      {content.map((item, i) => (
        <S.Category key={i}>
          <S.Image src={item.img} alt="" />
          <S.About>
            <S.Text>{item.text}</S.Text>
            <Button
              content={query.morebtn}
              fontSize='.9em'
              width='9rem'
              height='2.5rem'
            />
          </S.About>
        </S.Category>
      ))}
    </S.Wrapper>
  );
}