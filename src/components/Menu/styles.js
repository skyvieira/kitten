import styled from "styled-components";

import bounce from "../Animations/bounce";

export const Row = styled.div`
  box-shadow: 0 3px 5px #333;
  background: #2d0e30;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 5rem;
`;

export const Mavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;

export const Link = styled.a`
  position: relative;
  color: #fdfdfd;
  text-decoration: none;
  text-transform: uppercase;
  font: 600 .9em "Malgun Gothic", sans-serif;
  user-select: none;

  &:after {
    position: absolute;
    bottom: -.5rem;
    left: 44%;
    content: '';
    background: #fff;
    border-radius: 50%;
    width: 5px;
    height: 0;
    transition: .1s;
    opacity: .9;
  }

  &:hover :after {
    height: 5px;
    animation: ${bounce} .8s cubic-bezier(0.45, 0.05, 0.55, 0.95) .5s infinite;
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
    content: url(${props => props.phoneImg});
    position: absolute;
    left: -1.7rem;
    transform: scale(.9);
    filter: brightness(200%);
  }
`;
