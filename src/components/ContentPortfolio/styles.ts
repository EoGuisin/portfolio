import styled from "styled-components";

export const Portfolio = styled.div`
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
  margin-top: 2rem;
  text-align: center;
`;

export const ProjectsGrid = styled.div`
  grid-gap: 5rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  height: auto;
  width: 100%;
`;

export const Project = styled.div`
  background-color: #fff;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-inline: 3rem;
`;

export const ProjectFlex = styled.div`
  gap: 2rem;
  display: flex;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  text-align: start;
  color: rgba(45, 46, 50, 0.9);
  margin: 2rem;
`;

export const ProjectText = styled.div`
  font-size: 1.2rem;
  line-height: 1.2;
  text-align: justify;
  color: rgba(45, 46, 50, 0.7);
`;

export const PS = styled.div`
  font-size: 0.6rem;
  line-height: 1.2;
  text-align: center;
  color: rgba(45, 46, 50, 0.5);
`;

export const Divider = styled.div`
  height: 10rem;
  width: 1rem;
`;

export const Skills = styled.div`
  padding-top: 1rem;
  margin-top: 2rem;
  border-top: 2px solid rgba(45, 46, 50, 0.5);
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  margin-bottom: 1rem;
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
  justify-content: center;
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