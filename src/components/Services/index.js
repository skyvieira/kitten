import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        services {
          boarding
          daycare
          training
          grooming
          morebtn
        }
      }
    }
  `);

  const query = data.kittendata.services[0];

  return (
    <section>
      
    </section>
  );
}