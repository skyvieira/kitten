import styled from "styled-components";
import { AnchorLink as GatsbyLink } from "gatsby-plugin-anchor-links";

import boucingBubble from "../Hover/boucingBubble";

export const Container = styled.footer`
  background: #3c4049;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5rem 0;
  width: 75%;
`;

export const Logo = styled.img`
  align-self: center;
  max-height: 80px;
`;

export const Info = styled.section`
  min-width: 100px;
  color: #fff;
`;

export const Category = styled.h3`
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font: 600 .85em "Malgun Gothic", sans-serif;
`;

export const Text = styled.li`
  list-style: none;
  font: 300 .9em/1.6 "Malgun Gothic", sans-serif;
`;

export const AnchorLink = styled(GatsbyLink)`
  position: relative;
  color: #fff;
  text-decoration: none;

  ${boucingBubble}
  &:after {
    top: 45%; left: -.8rem;
  }
`;

export const Link = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;

  ${boucingBubble}
  &:after {
    top: 45%; left: -.8rem;
  }
`;

export const Copyright = styled.div`
  padding: 1.2rem 0 1.15rem;
  color: #fff;
  font: 300 .9em "Malgun Gothic", sans-serif;
  background: #2e2f34;

  p {
    margin: auto;
    width: 75%;
  }
`;

export const Reference = styled.div`
  padding: 1rem 0 .9rem;
  color: #707070;
  text-align: center;
  font: 400 .7em "Malgun Gothic", sans-serif;
  background: #222326;
`;