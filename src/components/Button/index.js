import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: ${props => props.width || '15rem'};
  height: ${props => props.height || '3.5rem'};
  color: #fff;
  font: 300 ${props => props.fontSize || '1.6em'} "Malgun Gothic", sans-serif;
  border: none;
  border-radius: 5px;
  background: #FEAF02;
  transition: .8s;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 0;
    height: 100%;
    background: #fff;
    mix-blend-mode: soft-light;
    transition: all 0.6s cubic-bezier(0.68, -0.6, 0.265, 2);
  }

  &:hover {
    box-shadow: 0 0 10px #fed308;

    &:before {
      width: 110%;
      border-radius: 0 30px 30px 0;
    }
  }
`;

export default function Btn({ content }) {
  return <Button>{content}</Button>
}