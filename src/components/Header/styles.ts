import styled from "styled-components";

export const HeaderContainer = styled.nav`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 200;
`;

export const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const NavText = styled.a`
  color: #2d2e32;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.6s ease-out;
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    color: #4a93aa;
  }
`;

export const Name = styled.h2`
  color: #2d2e32;
  cursor: pointer;
  margin-left: 3rem;
`;
