import styled, { keyframes } from "styled-components";

export const Hero = styled.div`
  align-items: center;
  display: flex;
  gap: 10rem;
  height: 45rem;
  justify-content: center;
  position: relative;
`;

export const HeroMain = styled.div`
  align-items: center;
  display: flex;
  gap: 10rem;
  justify-content: center;
  position: relative;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  position: relative;
`;

export const HeroText_p = styled.p`
  color: #555;
  font-family: Mulish, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
`;

const morph = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

export const Hero_img = styled.img`
  animation: ${morph} 8s ease-in-out infinite;
  background-image: url(https://avatars.githubusercontent.com/u/100172433?s=400&u=a4e779b93f6db5f30be4f6889fb3f46c144ce9ca&v=4);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  height: 20rem;
  position: relative;
  transition: all 1s ease-in-out;
  width: 20rem;
`;

export const Skills = styled.div`
  align-items: center;
  bottom: 0;
  color: #767676;
  display: flex;
  font-size: 1.2rem;
  left: 0;
  position: absolute;
`;

export const Skills_p = styled.p`
  border-right: 2px solid rgba(45, 46, 50, 0.5);
  color: #2d2e32;
  font-family: Mulish, sans-serif;
  font-weight: 600;
  margin-right: 1rem;
  padding-right: 2rem;
`;

export const Skills_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
`;

export const Skills_div = styled.div`
  cursor: pointer;
`;

export const Skills_img = styled.img`
  height: 3rem;
  transition: all 0.3s ease-in-out;
  width: 3rem;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const Contacts = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Contacts_icons = styled.a`
  color: #fff;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;
