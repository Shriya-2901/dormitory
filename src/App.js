import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Components/Buttons';
import Secretary from './pages/secretary';
import Hof from './pages/hof';
function App() {
  return (
    <BrowserRouter>
    <Buttons />
    <Routes>
        <Route exact path='/' element={<Secretary />} />
        <Route path='/hof' element={<Hof />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
