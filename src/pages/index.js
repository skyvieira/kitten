import React from "react";

import GlobalStyle from "../components/GlobalStyles";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";;

export default function Index() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <main>
        <Services />
        <About />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}