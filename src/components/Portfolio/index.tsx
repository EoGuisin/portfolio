import Image from "next/image";
import { ContainerPortfolio, Wrapper } from "./styles";
import { ContentPortfolio } from "..";

export function Portfolio() {
  return (
    <ContainerPortfolio id="projects">
        <Wrapper>
            <ContentPortfolio />
        </Wrapper>
    </ContainerPortfolio>
  );
}
