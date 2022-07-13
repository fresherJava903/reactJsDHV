import React from 'react';
import "./components/Header/Navbar/Navbar.css";
import "./App.css";
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./pages/HomePage/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Post from "./pages/PostsPage/PostsPage";
import Login from './pages/Login/LoginPage';
import Biography from './pages/Bio/Bio';
import Create from './pages/Create/CreatePost';
import PostDetail from './pages/PostDetail/PostDetail';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bio" element={<Biography />} />        
        <Route path="/create" element={<Create />} />
        <Route path="/postdetail" element={<PostDetail />} />        
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
