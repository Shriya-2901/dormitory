import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ComplaintsDesc from "./pages/ComplaintDesc";
import ComplaintForm from "./pages/ComplaintForm";
import Complaints from "./pages/Complaints";
import LostPage from "./pages/LostPage";

function App() {
  return (
    <div className="App">
      {/* <Complaints />
      <ComplaintForm />
      <ComplaintsDesc /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Complaints />} />
            <Route path="forms" element={<ComplaintForm />} />
            <Route path="desc" element={<ComplaintsDesc />} />
            <Route path="*" element={<LostPage />} />

          </Route>
        </Routes>
      </BrowserRouter>,

    </div>
  );
}

export default App;
