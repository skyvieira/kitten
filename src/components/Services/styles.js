import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10vh 0 20vh;
  width: 70%;
  height: 65vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  transition: .3s;
`;

export const About = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font: 600 1em "Malgun Gothic", sans-serif;
  transition: .3s;
`;

export const Category = styled.figure`
  width: 22%;

  &:hover {
    img {
      filter: drop-shadow(0 -4px 1px #bbb);
      transform: translateY(4px);
    }
    ${Text} {
      color: #333;
    }
  }
`;