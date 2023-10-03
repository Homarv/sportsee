import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import PageError from './pages/PageError';
import ServerProblem from './pages/ServerProblem';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home/:id" element={<Home />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
        <Route path="*" element={<PageError />} />
        <Route path="/serverproblem" element={<ServerProblem/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
