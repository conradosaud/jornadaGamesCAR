import { HashRouter, Routes, Route } from 'react-router-dom'

// Páginas — serão criadas nas próximas etapas de desenvolvimento
// import Home from '../pages/Home'
// import Students from '../pages/Students'
// import Teachers from '../pages/Teachers'

// Placeholder temporário até as páginas serem criadas
function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: '2rem', color: '#F0F0FF' }}>
      <h1>{title} — em construção</h1>
    </div>
  )
}

/**
 * AppRouter define todas as rotas da aplicação.
 * Usa HashRouter para funcionar sem configuração de servidor (PHP estático).
 * Exemplo de URL: https://site.com/#/alunos
 */
export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"            element={<PlaceholderPage title="Home (Timeline)" />} />
        <Route path="/alunos"      element={<PlaceholderPage title="Jogos dos Alunos" />} />
        <Route path="/professores" element={<PlaceholderPage title="Jogos dos Professores" />} />
      </Routes>
    </HashRouter>
  )
}
