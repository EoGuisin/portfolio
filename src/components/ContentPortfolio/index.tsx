import Image from "next/image";
import { Portfolio, Project, ProjectsGrid, Title_h3, Title_h4, ProjectText, Divider, PS, ProjectFlex, Skills_div, Skills_img, Skills_ul, Skills_p, Skills, ProjectTitle } from "./styles";
import {  } from "..";
import lofiMusic from "src/assets/LofiMusic.png";
import ticketWave from "src/assets/TicketWave.png";
import mobileOne from "src/assets/MobileOne.png";
import onMoney from "src/assets/onMoney.png";
import ticketWave2 from "src/assets/ticketWave2.png";

export function ContentPortfolio() {
  return (
    <Portfolio>
      <Title_h3>Portfolio</Title_h3>
      <Title_h4>Colocarei outros projetos em breve, entre no meu GitHub para ver mais!</Title_h4>
      <ProjectsGrid>
        <Project>
          <ProjectTitle>Harmony Hub</ProjectTitle>
          <ProjectFlex>
            <div>
              <a aria-label="Harmony Hub" rel="noreferrer" target="_blank" href="https://harmonyhubgui.vercel.app">
                <Image src={lofiMusic} alt="Harmony Hub" style={{ height: "12rem", width: "20rem", cursor: "pointer", borderRadius: "0.8rem" }} />
              </a>
              <PS>Para ouvir a música, acesse o repositório GitHub, clone-o e execute-o localmente. Devido às limitações do GitHub, que não suporta arquivos maiores que 25 MB, principalmente para arquivos de música, essa abordagem é necessária, pois o Vercel extrai o site diretamente do GitHub.</PS>
            </div>
            <ProjectText>Harmony Hub oferece uma experiência única com cinco listas de reprodução de música lo-fi, controle de volume e papéis de parede GIF personalizáveis do site ou uploads de usuários. Ele integra uma API externa de geocódigo para informações locais, exibindo atualizações do relógio em tempo real para uma experiência de usuário personalizada e envolvente.</ProjectText>
          </ProjectFlex>
          <Skills>
            <Skills_p style={{ color: "rgba(45, 46, 50, 0.8)" }}>Tech Used</Skills_p>
            <div>
              <Skills_ul>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=js" alt="skill-icon" title="JavaScript" />
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
                  <Skills_img src="https://skillicons.dev/icons?i=react" alt="skill-icon" title="ReactJS" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=styledcomponents" alt="skill-icon" title="styled-components" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=nextjs" alt="skill-icon" title="NextJS" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=figma" alt="skill-icon" title="NextJS" />
                </Skills_div>
              </Skills_ul>
            </div>
          </Skills>
        </Project>


        <Project>
          <ProjectTitle>TicketWave Mobile/Website</ProjectTitle>
          <ProjectFlex>
            <div>
              <a aria-label="ticketWave2" rel="noreferrer" target="_blank" href="https://www.figma.com/design/Bo0LwHyHQdAR0d8YjaqIYW/TicketWave?node-id=0-1&t=or6VQbTga9sUOxTf-1">
                <Image src={ticketWave2} alt="ticketWave2" style={{ height: "13rem", width: "20rem", cursor: "pointer", borderRadius: "0.8rem" }} />
              </a>
            </div>
            <ProjectText>TicketWave é para ser um app de tiqueteira, venda de ingressos para eventos musicais e de teatro por exemplo.</ProjectText>
          </ProjectFlex>
          <Skills>
            <Skills_p style={{ color: "rgba(45, 46, 50, 0.8)" }}>Tech Used</Skills_p>
            <div>
              <Skills_ul>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=figma" alt="skill-icon" title="Figma" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=svg" alt="skill-icon" title="svg" />
                </Skills_div>
              </Skills_ul>
            </div>
          </Skills>
        </Project>

        <Project>
          <ProjectTitle>Coparticipação na identidade visual: Mobile One+</ProjectTitle>
          <ProjectFlex>
            <div>
              <a aria-label="Mobile One+" rel="noreferrer" target="_blank" href="https://oneplus.dev.br">
                <Image src={mobileOne} alt="Harmony Hub" style={{ height: "13rem", width: "20rem", cursor: "pointer", borderRadius: "0.8rem" }} />
              </a>
            </div>
            <ProjectText>Participação na identidade visual do app criado no figma e ajuda de criação de SVGs.</ProjectText>
          </ProjectFlex>
          <Skills>
            <Skills_p style={{ color: "rgba(45, 46, 50, 0.8)" }}>Tech Used</Skills_p>
            <div>
              <Skills_ul>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=figma" alt="skill-icon" title="Figma" />
                </Skills_div>
              </Skills_ul>
            </div>
          </Skills>
        </Project>

        <Project>
          <ProjectTitle>Coparticipação na identidade visual: Mobile On Money</ProjectTitle>
          <ProjectFlex>
            <div>
              <a aria-label="Mobile One+" rel="noreferrer" target="_blank" href="https://apps.apple.com/br/app/on-money/id1580657286?l=en-GB&platform=iphone">
                <Image src={onMoney} alt="Harmony Hub" style={{ height: "13rem", width: "20rem", cursor: "pointer", borderRadius: "0.8rem" }} />
              </a>
            </div>
            <ProjectText>Com o On Money, terá todos os seus sistemas de gestão de comissão em uma única interface customizada com a sua regra de negócio.</ProjectText>
          </ProjectFlex>
          <Skills>
            <Skills_p style={{ color: "rgba(45, 46, 50, 0.8)" }}>Tech Used</Skills_p>
            <div>
              <Skills_ul>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=figma" alt="skill-icon" title="Figma" />
                </Skills_div>
              </Skills_ul>
            </div>
          </Skills>
        </Project>

        
        <Project>
          <ProjectTitle>Mobile One+</ProjectTitle>
          <ProjectFlex>
            <div>
              <a aria-label="Mobile One+" rel="noreferrer" target="_blank" href="https://oneplus.dev.br">
                <Image src={mobileOne} alt="Harmony Hub" style={{ height: "13rem", width: "20rem", cursor: "pointer", borderRadius: "0.8rem" }} />
              </a>
            </div>
            <ProjectText>Criado em React Native o app do zero (One+) onde liderei o projeto e cerimônias Ágeis Scrum, é um app de gestão imobiliária para a venda de suas unidades, controle de estoque e gerência das reservas de forma simplificada, controle de sala de vendas e funis de vendas.</ProjectText>
          </ProjectFlex>
          <Skills>
            <Skills_p style={{ color: "rgba(20, 22, 27, 0.8)" }}>Tech Used</Skills_p>
            <div>
              <Skills_ul>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=js" alt="skill-icon" title="JavaScript" />
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
                  <Skills_img src="https://skillicons.dev/icons?i=react" alt="skill-icon" title="ReactJS" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=styledcomponents" alt="skill-icon" title="styled-components" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=redux" alt="skill-icon" title="Redux" />
                </Skills_div>
                <Skills_div>
                  <Skills_img src="https://skillicons.dev/icons?i=firebase" alt="skill-icon" title="Firebase" />
                </Skills_div>
              </Skills_ul>
            </div>
          </Skills>
        </Project>
        
        
      </ProjectsGrid>
    </Portfolio>
  );
}