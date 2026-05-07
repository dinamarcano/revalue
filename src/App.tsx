import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChooseType from "./pages/ChooseType";
import Home from "./pages/Home";
import EditCampaign from "./pages/EditCampaign";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CHOOSE TYPE */}
        <Route path="/" element={<ChooseType />} />
        <Route path="/choose-type" element={<ChooseType />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* HOME */}
        <Route path="/home" element={<Home />} />

        {/* EDIT CAMPAIGN */}
        <Route path="/edit" element={<EditCampaign />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;