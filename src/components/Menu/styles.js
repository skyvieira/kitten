import styled from "styled-components"

export const Row = styled.div`
  box-shadow: 0 3px 5px #ccc;
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
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled.img``;

export const Telephone = styled(Link)`
  position: relative;
  margin-left: 2.5rem;
  font-size: .95em;

  &:before {
    content: '';
    position: absolute;
    left: -2rem;
  }
`;
