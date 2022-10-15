import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import NavBar1 from "./components/NavBar1";
import NavBar2 from "./components/NavBar2";
import ComplaintsDesc from "./pages/ComplaintDesc";
import ComplaintForm from "./pages/ComplaintForm";
import LostPage from "./pages/LostPage";
import Complaints from "./pages/Complaints";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar1 />
        <NavBar2 />

        <div className="pages">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route
              path="/secretaries"
              element={
                <>
                  <h2>Secretaries</h2>{" "}
                </>
              }
            />
            <Route path="/complaint" element={ <Complaints/>}/>
            <Route path="/complaint/forms" element={<ComplaintForm />} />
            <Route path="/complaint/desc" element={<ComplaintsDesc />} />

            <Route path="*" element={<LostPage />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
