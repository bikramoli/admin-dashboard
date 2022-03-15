import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/style/Style.css";
import "./assets/style/Responsive.css";
import "./assets/style/NewStyle.css";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import AllBlogs from "./pages/AllBlogs";
import Footer from "./components/Footer";
import AddBlog from "./pages/AddBlog";
import PreviewBlog from "./pages/PreviewBlog";
import ArchivedBlog from "./pages/ArchivedBlog";
import DraftedBlog from "./pages/DraftedBlog";
import RemovedBlogs from "./pages/RemovedBlogs";
// import Login from "./pages/Login";
import NewLogin from "./pages/NewLogin";

function App() {
  const [userName, setUserName] = useState("Vikram");
  return (
    <BrowserRouter>
      <Navbar userName={userName} />
      <SideNav />
      <Routes>
        {/* <Route exact path="/" element={<Dashboard userName={userName} />} /> */}
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/previewblog" element={<PreviewBlog />} />
        <Route path="/logins" element={<NewLogin />} />
        <Route path="/archivedBlog" element={<ArchivedBlog />} />
        <Route path="/draftedBlog" element={<DraftedBlog />} />
        <Route path="/removedBlog" element={<RemovedBlogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
