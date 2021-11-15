import styled from "styled-components";

import bounce from "../Animations/bounce";

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

export const Link = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;

  &:after {
    position: absolute;
    top: 45%;
    left: -.8rem;
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

export const Copyright = styled.p`
  margin: auto;
  padding: 1.2rem 0 1.15rem;
  width: 75%;
  color: #fff;
  font: 300 .9em "Malgun Gothic", sans-serif;
`;

export const Reference = styled.p`
  padding: 1rem 0 .9rem;
  color: #707070;
  text-align: center;
  font: 400 .7em "Malgun Gothic", sans-serif;
`;