import { css } from "styled-components";

import bounce from "../Animations/bounce";

const boucingBubble = css`
  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 0;
    border-radius: 50%;
    background: #fff;
    transition: .1s;
    opacity: .9;
  }

  &:hover::after {
    height: 5px;
    animation: ${bounce} .8s cubic-bezier(0.45, 0.05, 0.55, 0.95) .5s infinite;
  }
`;

export default boucingBubble