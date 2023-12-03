import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Sou um engenheiro front-end interessado em criar experiências digitais
      excepcionais. Minha formação sólida em Engenharia de Software e
      habilidades avançadas em HTML, CSS, JavaScript e frameworks como React e
      Angular me capacitam para enfrentar projetos desafiadores com sucesso. Com
      uma abordagem orientada para resultados, boas habilidades de comunicação e
      comprometimento com as melhores práticas, consigo integrar equipes
      multidisciplinares de maneira eficaz. Estou sempre em busca de
      oportunidades para aprimorar minhas habilidades e manter-me atualizado com
      as últimas tendências do setor. Ansioso para enfrentar novos desafios, meu
      objetivo é continuar crescendo profissionalmente, contribuindo para o
      sucesso de projetos que elevem a qualidade das aplicações web e
      proporcionem uma experiência excepcional aos usuários finais.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Viitor22&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Viitor22&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
