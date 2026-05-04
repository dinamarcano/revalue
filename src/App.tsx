import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChooseType from "./pages/ChooseType";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PANTALLA INICIAL */}
        <Route path="/" element={<ChooseType />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* CHOOSE TYPE */}
        <Route path="/choose-type" element={<ChooseType />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;