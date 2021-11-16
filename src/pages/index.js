import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import GlobalStyle from "../components/GlobalStyles";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

export default function Index() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        indices {
          favicon {
            url
          }
        }
      }
    }
  `);

  const icon = data.kittendata.indices[0].favicon.url;
  
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={icon} type="image/x-icon" />
        <title>Kitten House</title>
        <html style='scroll-behavior: smooth'/>
      </Helmet>

      <GlobalStyle />
      <Header />
      <main>
        <Services/>
        <About />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}