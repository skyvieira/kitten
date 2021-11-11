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
    <section>
      
    </section>
  );
}