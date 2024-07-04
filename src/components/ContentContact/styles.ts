import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title_h3 = styled.h3`
  color: #4a93aa;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const Title_h4 = styled.h4`
  color: #2d2e32;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

export const ContactIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  margin-top: 6rem;
`;

export const IconBox = styled.div`
  align-items: center;
  display: flex;
  gap: 1.5rem;
`;

export const IconBox_span = styled.span`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #4a93aa;
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 4rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
`;

export const ContactInfo_h3 = styled.h3`
  color: #2d2e32;
`;

export const ContactInfo_a = styled.a`
  color: #767676;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #4a93aa;
  }
`;
