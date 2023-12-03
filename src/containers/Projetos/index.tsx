import Projeto from '../../components/Projeto'
import Title from '../../components/Title'

import { useEffect, useState } from 'react'
import { Lista } from './style'

const Projetos = () => {
  const [repos, setRepos] = useState([])
  const [estaCarregando, setestaCarregando] = useState(true)

  useEffect(() => {
    setestaCarregando(true)
    fetch(`https://api.github.com/users/Viitor22/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setestaCarregando(false)
        setRepos(resJson)
      })
  }, [])

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : (
        <Lista>
          {repos.map(({ id, name, language, html_url }) => (
            <li key={id}>
              <Projeto
                name={name}
                language={language}
                html_url={html_url}
              ></Projeto>
            </li>
          ))}
        </Lista>
      )}
    </section>
  )
}

export default Projetos
