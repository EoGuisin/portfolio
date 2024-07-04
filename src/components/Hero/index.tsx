import { ContentContainer, Wrapper } from "./styles";
import { ContentHero } from "..";

export function Hero() {
  return (
    <ContentContainer id="home">
      <Wrapper>
        <ContentHero />
      </Wrapper>
    </ContentContainer>
  );
}
