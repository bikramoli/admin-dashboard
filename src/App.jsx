import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/Style.css";
import "./assets/style/Responsive.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  const [userName, setUserName] = useState("Bikram");
  return (
    <BrowserRouter>
      <Navbar userName={userName} />
      <Routes>
        <Route exact path="/" element={<Dashboard userName={userName} />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
