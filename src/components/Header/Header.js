import React from "react";
import Banner from "./Banner/Banner";
import NavBar from "./Navbar/NavBar";

function Header({ message1, message2 , imageurl }) {
    return (
        <header className="masthead" style={{ backgroundImage: `url(${imageurl})`}}>
            <NavBar />
            <Banner message1={message1} message2={message2}/>
        </header>
    );
}
export default Header;
