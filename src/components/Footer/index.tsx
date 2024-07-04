import Image from "next/image";
import { FooterContainer, Wrapper, Copy_h3, Contacts, Contacts_icons, Content } from "./styles";
import { github, linkedin } from "@/assets";

export function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <Content>
        <Copy_h3>Copyright © 2024. All rights are reserved</Copy_h3>
          <Contacts>
            <Contacts_icons aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/guilhermegarciasantos/">
              <Image src={linkedin} alt="linkedin"/>
            </Contacts_icons>
            <Contacts_icons aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/EoGuisin">
              <Image src={github} alt="github"/>
            </Contacts_icons>
          </Contacts>
        </Content>
      </Wrapper>
    </FooterContainer>
  );
}
