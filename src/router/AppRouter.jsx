import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/Home';
import AlunosPage from '../pages/Alunos';
import ProfessoresPage from '../pages/Professores';

/**
 * AppRouter define todas as rotas da aplicação.
 * Usa HashRouter para funcionar sem configuração de servidor (PHP estático).
 */
export default function AppRouter() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/alunos"      element={<AlunosPage />} />
          <Route path="/professores" element={<ProfessoresPage />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}

