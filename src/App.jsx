import { useState } from "react";
import "./App.css";
import "./styles/global.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import About from "./pages/About"; // This line correctly imports your new page
import Creator from "./pages/Creator"; // 1. Import the new Creator page
import Pricing from "./pages/Pricing";
import Community from "./pages/Community";
import Roadmap from "./pages/Roadmap";
import RoadmapAlt from "./pages/RoadmapAlt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} /> {/* This line correctly routes to your new page */}
        <Route path="creator" element={<Creator />} /> {/* 2. Add the new Creator route */}
        <Route path="pricing" element={<Pricing />} /> {/* 2. Add the new Creator route */}
        <Route path="community" element={<Community />} /> {/* 2. Add the new Creator route */}
        <Route path="roadmap" element={<Roadmap />} />
        {/* <Route path="roadmapalt" element={<RoadmapAlt/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;