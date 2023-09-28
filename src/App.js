import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home/:id" element={<Home />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
        <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
