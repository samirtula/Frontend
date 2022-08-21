import React from "react";
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <a href="/about">О сайте</a>
                    <a href="/posts">Посты</a>
                </div>
            </div>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/posts" element={<Posts/>} />
                </Routes>
        </BrowserRouter>
    )
}

export default App;
