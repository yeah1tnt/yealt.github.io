import React from "react";
import './NavBar.css';

export default function NavBar({title}) {
    return (
        <div className="NavBarMain">
            <h1>{title}</h1>
            <nav>
                <button className='NavBarButton'><a href='/'>Home</a></button>
                <button className='NavBarButton'><a href='/about'>About</a></button>
            </nav>
        </div>
    )
}