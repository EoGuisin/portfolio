import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #777982;
  padding: 3rem 0;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 107rem;
  padding: 0 4rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Copy_h3 = styled.h3`
  color: #fff;
  font-size: 1.4rem;
`;

export const Contacts = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const Contacts_icons = styled.a`
  color: #fff;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;
