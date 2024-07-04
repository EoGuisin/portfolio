import Image from "next/image";
import { Contact, Title_h3, Title_h4, ContactIcons, IconBox, IconBox_span, ContactInfo, ContactInfo_h3, ContactInfo_a } from "./styles";
import { linkedin2, email, whatsapp } from "@/assets";

export function ContentContact() {
  return (
    <Contact>
      <Title_h3>Contato</Title_h3>
      <Title_h4>Conecte comigo, me mande uma mensagem!</Title_h4>
      <ContactIcons>
        <IconBox>
          <IconBox_span>
            <Image src={linkedin2} alt="linkedin" />
          </IconBox_span>
          <ContactInfo>
            <ContactInfo_h3>LinkedIn</ContactInfo_h3>
            <ContactInfo_a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/guilhermegarciasantos/">Guilherme Augusto Santos</ContactInfo_a>
          </ContactInfo>
        </IconBox>
        <IconBox>
          <IconBox_span>
            <Image src={email} alt="email" />
          </IconBox_span>
          <ContactInfo>
            <ContactInfo_h3>E-mail</ContactInfo_h3>
            <ContactInfo_a href="mailto:guilherme.garcia1240@gmail.com">guilherme.garcia1240@gmail.com</ContactInfo_a>
          </ContactInfo>
        </IconBox>
        <IconBox>
          <IconBox_span>
            <Image src={whatsapp} alt="whatsapp" />
          </IconBox_span>
          <ContactInfo>
            <ContactInfo_h3>Phone</ContactInfo_h3>
            <ContactInfo_a>+55 (62) 98233-2753</ContactInfo_a>
          </ContactInfo>
        </IconBox>
      </ContactIcons>
    </Contact>
  );
}
