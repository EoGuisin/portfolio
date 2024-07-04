import Image from "next/image";
import { Hero, HeroMain, HeroText, HeroText_p, Hero_img, Skills, Skills_p, Skills_ul, Skills_div, Skills_img, Contacts, Contacts_icons } from "./styles";
import { TypeAnimation } from 'react-type-animation';
import { blackGithub } from "@/assets";

export function ContentHero() {
    const styleTypeAnimation = { color: "#2d2e32", fontSize: "2.5rem", fontWeight: 500, lineHeight: 1.2, marginBottom: "2rem", marginTop: "1rem" }

  return (
    <div>
        <Hero>
            <HeroMain>
                <HeroText>
                    <TypeAnimation
                        sequence={['Designer UI/UX / Software Developer']}
                        cursor={true}
                        speed={20}
                        style={styleTypeAnimation}
                    />
                    <HeroText_p>Olá, meu nome Guilherme Augusto, um Designer e Desenvolvedor de Software apaixonado com 4 anos de experiência e um talento para criar soluções inovadoras e bonitas. Vamos construir juntos o futuro da tecnologia!</HeroText_p>
                </HeroText>
                <Hero_img />
            </HeroMain>
            <Skills>
                <Skills_p>Tech Stack</Skills_p>
                <div>
                    <Skills_ul>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=pr" alt="skill-icon" title="Adobe Premiere Pro" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=ae" alt="skill-icon" title="Adobe After Effects" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=ps" alt="skill-icon" title="Adobe Photoshop" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=figma" alt="skill-icon" title="Figma" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=js" alt="skill-icon" title="JavaScript" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=py" alt="skill-icon" title="Python" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=ts" alt="skill-icon" title="TypeScript" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=html" alt="skill-icon" title="HTML" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=css" alt="skill-icon" title="CSS" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=react" alt="skill-icon" title="React and React Native" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=redux" alt="skill-icon" title="Redux" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=styledcomponents" alt="skill-icon" title="styled-components" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=nextjs" alt="skill-icon" title="NextJS" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s" alt="skill-icon" title="Expo" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=nodejs" alt="skill-icon" title="NodeJS" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=mysql" alt="skill-icon" title="MySQL" />
                        </Skills_div>
                        <Skills_div>
                            <Skills_img src="https://skillicons.dev/icons?i=firebase" alt="skill-icon" title="Firebase" />
                        </Skills_div>
                    </Skills_ul>
                </div>
            </Skills>
        </Hero>
        <Contacts>
            <Contacts_icons aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/EoGuisin">
              <Image src={blackGithub} alt="github"/>
            </Contacts_icons>
          </Contacts>
    </div>
  );
}
