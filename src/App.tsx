import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChooseType from "./pages/ChooseType";
import Home from "./pages/Home";
import EditCampaign from "./pages/EditCampaign";
import CreateCampaign from "./pages/CreateCampaign";
import Profile from "./pages/Profile";
import Machines from "./pages/Machines";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CHOOSE TYPE */}
        <Route path="/" element={<ChooseType />} />
        <Route
          path="/choose-type"
          element={<ChooseType />}
        />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* EDIT CAMPAIGN */}
        <Route
          path="/edit"
          element={
            <PrivateRoute>
              <EditCampaign />
            </PrivateRoute>
          }
        />

        {/* CREATE CAMPAIGN */}
        <Route
          path="/create-campaign"
          element={
            <PrivateRoute>
              <CreateCampaign />
            </PrivateRoute>
          }
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* MACHINES */}
        <Route
          path="/machines"
          element={
            <PrivateRoute>
              <Machines />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;