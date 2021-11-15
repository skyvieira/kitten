import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem 0 2rem;
  background: #FEAF02;
`;

export const Title = styled.h2`
  padding: 2rem 0;
  text-align: center;
  color: #fff;
  font: 300 1.7em "Malgun Gothic", sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  min-height: 45vh;
`;

export const Video = styled.figure`
  display: flex;
  flex-direction: column;
  width: 47%;
  max-height: 300px;
  border: 6px solid #fff;
`;

export const Description = styled.figcaption`
  padding: 1.2rem 0 .8rem;
  text-align: center;
  font: 400 1em "Malgun Gothic", sans-serif;
  background: #fff;
`;