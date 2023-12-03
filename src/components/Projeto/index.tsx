import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

type Props = {
  name: string
  language: string
  html_url: string
}

const Projeto = (props: Props) => (
  <Card>
    <Title>{props.name}</Title>
    <Paragrafo tipo="secundario">
      Linguagem:
      {props.language}
    </Paragrafo>
    <LinkBotao target="_blank" href={props.html_url}>
      Visitar no GitHub
    </LinkBotao>
  </Card>
)

export default Projeto
