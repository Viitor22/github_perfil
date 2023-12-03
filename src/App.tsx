import React from 'react'
import EstiloGlobal, { Container } from './styles'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import Light from './themes/light'
import Dark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? Dark : Light}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Sidebar trocaTema={trocaTema}></Sidebar>
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
