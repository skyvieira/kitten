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
    <section>
      
    </section>
  );
}