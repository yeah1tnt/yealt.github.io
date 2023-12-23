import React from 'react'
import NavBar from '../components/NavBar';
export default function Home() {
    const title = "Home";
    return (
        <div>
            <NavBar title={title}></NavBar>
        </div>
    )
}