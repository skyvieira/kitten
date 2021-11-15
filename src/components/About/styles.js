import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  background: url(${props => props.image});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: bottom right;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 30%;
  height: 100%;
  background-image: linear-gradient(
    -90deg, 
    #00000000 0%, 
    #eaeaea 100%);
  transition: .4s;
`;

export const Content = styled.div`
  padding: 8rem 0 0 8rem;
  width: 50%;
  min-height: 70vh;
  border-top: 1px solid #aaa;
  background: #eaeaea;
`;

export const Title = styled.h2`
  font: 600 1.6em "Malgun Gothic", sans-serif;
`;

export const About = styled.p`
  padding: 1.2rem 0;
  width: 95%;
  font: 400 1em "Malgun Gothic", sans-serif;
`;

export const List = styled.ul``;

export const Text = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
  padding: 5px 0;
  list-style: none;
  font: 400 1em "Malgun Gothic", sans-serif;

  &:before {
    content: '';
    position: absolute;
    left: -1.3rem;
    width: .9rem;
    height: .9rem;
    border-radius: 50%;
    background: #FEAF02;
  }
`;
