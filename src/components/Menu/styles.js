import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import boucingBubble from "../Hover/boucingBubble";

export const Row = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: ${props => props.showMenu ? '0 0 20px #111' : 'none'};
  background: ${props => props.showMenu ? '#2e2f34' : 'none'};
  transform: ${props => props.hiddenMenu ? 'translateY(-100%)' : 'translateY(0)'};
  transition: .4s;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  height: 5rem;
`;

export const Mavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;

export const Link = styled(AnchorLink)`
  position: relative;
  color: #fdfdfd;
  text-decoration: none;
  text-transform: uppercase;
  font: 600 .85em "Malgun Gothic", sans-serif;
  user-select: none;

  ${boucingBubble}
  &:after {
    bottom: -.5rem;
    left: 44%;
  }
`;

export const Logo = styled.img`
  height: 100%;
  -webkit-user-drag: none;
  transition: .2s;

  &:hover {
    transform: scale(.985) translateX(-2px);
  }
`;

export const Telephone = styled.p`
  position: relative;
  margin-left: 2.5rem;
  color: #f0f0f0;
  font: 600 .85em "Malgun Gothic", sans-serif;

  &:before {
    content: url(${props => props.icon});
    position: absolute;
    left: -1.7rem;
    transform: scale(.9);
    filter: brightness(200%);
  }
`;
