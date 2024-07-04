import Image from "next/image";
import { HeaderContainer, Wrapper, Name, NavText } from "./styles";
import { logo } from "@/assets";

export function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Image src={logo} alt="Logo" height={90} width={45} style={{ marginLeft: 30 }} />
        <Name>Guilherme Santos</Name>
      </Wrapper>
      <div>
        <NavText href="#home">Home</NavText>
        {/* <NavText href="#about">About</NavText> */}
        <NavText href="#projects">Projetos</NavText>
        <NavText href="#contact">Contato</NavText>
      </div>
    </HeaderContainer>
  );
}
