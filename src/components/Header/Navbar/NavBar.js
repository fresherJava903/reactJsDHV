import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaIndent, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [navExpanded, setNavExpanded] = useState(false);
    let navigate = useNavigate();
    let username = localStorage.getItem("username");
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("config");
        alert("Logout Successful");
        setNavExpanded(!navExpanded);
        navigate("/");
    }
    return (
        <nav className="navigation">
            <div>
                <Link to="/" className="brand-name">  <img id='nav-item-text' src={"https://24wallpapers.com/app-gateway/wallpaper-uploads/wallpapers/28_12_2021/1640677143879_6.png"} alt='logo' />  </Link>
            </div>

            <div className='search-group'>
                <button className="hamburger" onClick={() => { setNavExpanded(!navExpanded); }}><FaIndent /></button>
                <div className={navExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li><Link to="/" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>Home</Link></li>
                        <li><Link to="/about" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>About</Link></li>
                        <li><Link to="/contact" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>Contact</Link></li>
                        <li><Link to="/posts" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>Posts</Link></li>
                        {username != null ? (
                            <>
                                <li><Link to="/create" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>New Post</Link></li>
                                <li><Link to="/" id='nav-item' onClick={handleLogout}>Logout</Link></li>
                                <li><Link to="/bio" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>(Accout:{username})</Link></li></>
                        )
                            :
                            <li><Link to="/login" id='nav-item' onClick={() => { setNavExpanded(!navExpanded); }}>Login</Link></li>}
                    </ul>
                </div>
                <div className="nav-search">
                    <input type="text" id="nav-search-box" placeholder='Search' />
                    <button id="nav-search-button"><FaSearch /></button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;