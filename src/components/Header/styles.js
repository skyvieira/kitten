import styled from "styled-components";

export const Container = styled.header`
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-bottom: 20vh;
  width: 90%;
  height: 100vh;
  color: #fff;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font: 600 3em "Malgun Gothic", sans-serif;
`;

export const Subtitle = styled.h2`
  font: 500 2.6em "Malgun Gothic", sans-serif;
`;

export const Description = styled.h3`
  padding: 1.5rem 0 2.5rem;
  max-width: 550px;
  font: 500 1.2em "Malgun Gothic", sans-serif;
`;