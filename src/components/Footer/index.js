import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        footers {
          logo {
            url
          }
          location
          address
          city
          phone1
          phone2
          email
          daycare
          workday1
          workday2
          links
          home
          about
          service
          reservation
          contact
          socials
          social1
          social2
          social3
          social4
          rights
          reference
        }
      }
    }
  `);

  const query = data.kittendata.footers[0];

  return (
    <footer>
      
    </footer>
  );
}