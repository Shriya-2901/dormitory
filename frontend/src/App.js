import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import NavBar1 from './components/NavBar1';
import NavBar2 from './components/NavBar2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar1 />
      <NavBar2 />

        <div className="pages">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/secretaries" element={<><h2>Secretaries</h2> </>} />
            <Route path="/complaint" element={<><h2>Complaint</h2> </>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
