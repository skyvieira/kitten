import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";
import Menu from "../Menu";

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
    <header>
      <Menu />
    </header>
  );
}