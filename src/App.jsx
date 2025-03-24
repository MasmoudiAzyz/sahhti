import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Register";
import Home from "./pages/Home";
import Register from "./pages/Login";
import Accueil from "./pages/Accueil";
import RendezVous from "./pages/RendezVous";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/RendezVous" element={<RendezVous />} />
      </Routes>
    </div>
  );
};

export default App;
